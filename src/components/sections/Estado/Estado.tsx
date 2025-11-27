import React from 'react';
import { Title, SubTitle, Parrafo } from '@/components';
import { Badge } from "@/components/ui/badge"
import { MdOutlineTimer } from "react-icons/md";

interface EstadoProps {}

export const Estado: React.FC<EstadoProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <Title title="Estado de Inscripción" className="m-0" />
    
      <SubTitle subtitle="Periodo Actual:" className="m-0" />
      <Badge className="bg-backg text-letras ml-3">II-2025</Badge>

    <div className="flex items-center">
      <MdOutlineTimer className="text-secondary ml-3" />
      <Parrafo parrafo="Tiempo restante:" className="m-0" />
    </div>

    <SubTitle subtitle="8 horas 0 minutos 5 segundos" className="m-0" />

    <div className="flex items-start justify-between">
      <Parrafo parrafo="Inicio:" className="m-0 leading-none" />
      <Parrafo parrafo="Martes 12 de Agosto de 2025" className="m-0 leading-none" />
    </div>

    <div className="flex items-start justify-between ">
      <Parrafo parrafo="Cierre:" className="m-0 leading-none" />
      <Parrafo parrafo="Martes 12 de Agosto de 2025" className="m-0 leading-none" />
    </div>

  </div>

  );
};
