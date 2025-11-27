import React from 'react';
import { Inscripcion, Horario, Informacion, Estado } from '@/components';

export default function Page() {
  return (
    <div className="min-h-screen px-2 pb-2 flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 w-full mx-auto flex-1">
        <Inscripcion />

        <Horario />

        <div className="lg:col-span-3 flex flex-col gap-1">
          <Informacion />
          <Estado />
        </div>
      </div>
    </div>
  );
}
