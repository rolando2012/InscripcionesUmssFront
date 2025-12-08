import React from 'react';
import { Inscripcion, Horario, Informacion, Estado } from '@/components';
import { cookies } from 'next/headers'
import { jwtVerify, errors } from 'jose'
import { fetchOfertaAcademica } from '@/lib/api';
import { redirect } from 'next/navigation';

// 1. Definimos el límite máximo de materias
const MAX_MATERIAS = 6; 

export default async function Page() {
  const token = (await cookies()).get('access_token')?.value;
   if (!token) {
    return <p>No autenticado</p>;
  }

  let ofertaData = null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
    const estudianteId = Number((payload as any).id);
    ofertaData = await fetchOfertaAcademica(estudianteId);
  } catch (error) {
    if (error instanceof errors.JWTExpired) {
      console.error('JWT expirado en Server Component, redirigiendo.');
      redirect('/'); 
    }
    console.error('Error de verificación de JWT inesperado:', error);
    redirect('/');
  }

  return (
    <div className="min-h-screen px-2 pb-2 flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 w-full mx-auto flex-1">
        <Inscripcion 
           estudianteId={ofertaData?.estudiante?.id}
           ofertaSugerida={ofertaData?.ofertaSugerida ?? []}
           maxMaterias={MAX_MATERIAS} // Pasamos el prop
        />

        <Horario />

        <div className="lg:col-span-3 flex flex-col gap-1">
          {/* Pasamos el prop */}
          <Informacion 
            promedio={ofertaData?.estudiante?.promedioAnterior} 
            maxMaterias={MAX_MATERIAS} 
          />
          <Estado />
        </div>
      </div>
    </div>
  );
}