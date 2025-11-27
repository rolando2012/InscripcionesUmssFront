import React from 'react';
import { Title, SubTitle,Parrafo } from '@/components';
import { Badge } from "@/components/ui/badge"

interface InformacionProps {}

export const Informacion: React.FC<InformacionProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
      <Title title="Información de inscripción" className="m-0 " />
      <SubTitle subtitle="Promedio del anterior semestre" className="m-0" />
      <Badge className="bg-backg text-letras ml-3">65,5</Badge>
      <SubTitle subtitle="Total de materias: 6" className="m-0" />
      <Parrafo parrafo="Modadlidades:" className="m-0 "/>
      <div className="flex items-end justify-between">
            <Parrafo parrafo="Normal:" className="m-0 leading-none" />
            <Parrafo parrafo="0" className="m-0 leading-none" />
      </div>
      <div className="flex items-end justify-between">
            <Parrafo parrafo="Mesa:" className="m-0 leading-none" />
            <Parrafo parrafo="0" className="m-0 leading-none" />
      </div>

      <hr className="mx-3 border border-gray-200" />

      <div className="flex items-end justify-between">
            <Parrafo parrafo="Total:" className="m-0 leading-none" />
            <Parrafo parrafo="0" className="m-0 leading-none" />
      </div>

    </div>
  );
};
