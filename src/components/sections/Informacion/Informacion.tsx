'use client'
import React, { useState, useEffect } from 'react';
import { Title, SubTitle,Parrafo } from '@/components';
import { Badge } from "@/components/ui/badge"

interface InformacionProps {}

export const Informacion: React.FC<InformacionProps> = () => {
  const [countNormal, setCountNormal] = useState(0);
  const [countMesa, setCountMesa] = useState(0);

  useEffect(() => {
    const handleInscripcion = (event: any) => {
      const { modalidad } = event.detail;
      if (modalidad === 'normal') {
        setCountNormal(prev => prev + 1);
      } else if (modalidad === 'mesa') {
        setCountMesa(prev => prev + 1);
      }
    };

    const handleDesinscripcion = (event: any) => {
      const { modalidad } = event.detail;
      if (modalidad === 'normal') {
        setCountNormal(prev => Math.max(0, prev - 1));
      } else if (modalidad === 'mesa') {
        setCountMesa(prev => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('materiaInscrita', handleInscripcion);
    window.addEventListener('materiaInscritaMesa', handleInscripcion);
    window.addEventListener('materiaDesinscrita', handleDesinscripcion);
    
    return () => {
      window.removeEventListener('materiaInscrita', handleInscripcion);
      window.removeEventListener('materiaInscritaMesa', handleInscripcion);
      window.removeEventListener('materiaDesinscrita', handleDesinscripcion);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
      <Title title="Información de inscripción" className="m-0 " />
      <SubTitle subtitle="Promedio del anterior semestre" className="m-0" />

      <Badge className="bg-backg text-letras ml-3 my-2">65,5</Badge>

      <SubTitle subtitle="Total de materias: 6" className="m-0" />
      <Parrafo parrafo="Modadlidades:" className="m-0 "/>

      <div className="flex items-end justify-between">
            <Parrafo parrafo="Normal:" className="m-0 leading-none" />
            <Parrafo parrafo={countNormal.toString()} className="m-0 leading-none" />
      </div>
      <div className="flex items-end justify-between">
            <Parrafo parrafo="Mesa:" className="m-0 leading-none" />
            <Parrafo parrafo={countMesa.toString()} className="m-0 leading-none" />
      </div>

      <hr className="mx-3 border border-secondary" />

      <div className="flex items-end justify-between">
            <Parrafo parrafo="Total:" className="m-0 leading-none" />
            <Parrafo parrafo={(countNormal + countMesa).toString()} className="m-0 leading-none" />
      </div>

    </div>
  );
};
