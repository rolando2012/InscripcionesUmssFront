import React from 'react';
import { Inscripcion, Horario, Informacion, Estado } from '@/components';
import { cookies } from 'next/headers'
import { jwtVerify, errors } from 'jose'
import { fetchOfertaAcademica } from '@/lib/api';
import { redirect } from 'next/navigation';

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
  // 1. Manejo del token expirado
    if (error instanceof errors.JWTExpired) {
      console.error('JWT expirado en Server Component, redirigiendo.');
      // Simplemente redirige a la página de login (que limpiará la cookie si está bien configurada)
      redirect('/'); // Redirige al inicio (o login)
    }

    // 2. Otros errores de JWT
    console.error('Error de verificación de JWT inesperado:', error);
    redirect('/');
}

  return (
    <div className="min-h-screen px-2 pb-2 flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 w-full mx-auto flex-1">
        <Inscripcion 
           estudianteId={ofertaData?.estudiante?.id}
          ofertaSugerida={ofertaData?.ofertaSugerida ?? []}
        />

        <Horario />

        <div className="lg:col-span-3 flex flex-col gap-1">
          <Informacion promedio={ofertaData?.estudiante?.promedioAnterior}/>
          <Estado />
        </div>
      </div>
    </div>
  );
}
