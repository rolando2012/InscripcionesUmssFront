import React from 'react';
import { Inscripcion, Horario, Informacion, Estado } from '@/components';
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { fetchOfertaAcademica } from '@/lib/api';

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
} catch (e) {
  console.error(e);
  return <p>Token inválido</p>;
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
