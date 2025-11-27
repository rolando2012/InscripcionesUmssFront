import React from 'react';
import { Title, SubTitle, Parrafo } from '@/components';
import { Badge } from "@/components/ui/badge";
import { MdOutlineTimer } from "react-icons/md";

interface EstadoProps {}

export const Estado: React.FC<EstadoProps> = () => {
  return (
    // también comparte el espacio vertical en lg; si prefieres que sea más pequeño usa lg:flex-none
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-1 lg:min-h-0 min-h-0">
      <div className="space-y-2">
        <Title title="Estado de Inscripción" className="m-0 text-lg lg:text-xl" />

        
        <SubTitle subtitle="Periodo Actual:" className="m-0 text-sm lg:text-base" />

        <Badge className="bg-backg text-letras ml-3 my-2 px-2 py-0.5 text-sm">II-2025</Badge> 

        <div className="flex items-center gap-2">
          <MdOutlineTimer className="text-secondary ml-3" />
          <Parrafo parrafo="Tiempo restante:" className="m-0 text-sm lg:text-base leading-tight" />
        </div>

        <SubTitle subtitle="8 horas 0 minutos 5 segundos" className="m-0 text-sm lg:text-base" />

        <div className="mt-1 space-y-1">
          <div className="flex items-start justify-between">
            <Parrafo parrafo="Inicio:" className="m-0 leading-tight text-sm lg:text-base" />
            <Parrafo parrafo="Martes 12 de Agosto de 2025" className="m-0 leading-tight text-sm lg:text-base" />
          </div>

          <div className="flex items-start justify-between">
            <Parrafo parrafo="Cierre:" className="m-0 leading-tight text-sm lg:text-base" />
            <Parrafo parrafo="Martes 12 de Agosto de 2025" className="m-0 leading-tight text-sm lg:text-base" />
          </div>
        </div>
      </div>
    </div>
  );
};
