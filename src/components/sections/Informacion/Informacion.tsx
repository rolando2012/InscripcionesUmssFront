'use client'
import React, { useState, useEffect } from 'react';
import { Title, SubTitle, Parrafo } from '@/components';
import { Badge } from "@/components/ui/badge"

interface InformacionProps {
  promedio?: string | number | null;
  maxMaterias: number; // Nuevo prop
}

export const Informacion: React.FC<InformacionProps> = ({ promedio, maxMaterias }) => {
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

  const totalInscritas = countNormal + countMesa;
  const limiteAlcanzado = totalInscritas >= maxMaterias;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
      <Title title="Información de inscripción" className="m-0 " />
      <SubTitle subtitle="Promedio del anterior semestre" className="m-0" />

      <Badge className="bg-backg text-letras ml-3 my-2">{promedio ?? '—'}</Badge>

      {/* Usamos la variable maxMaterias */}
      <SubTitle subtitle={`Total de materias: ${maxMaterias}`} className="m-0" />
      
      <Parrafo parrafo="Modalidades:" className="m-0 "/>

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
            <Parrafo parrafo={totalInscritas.toString()} className="m-0 leading-none" />
      </div>

      {/* Mensaje de Alerta si se alcanza el límite */}
      {limiteAlcanzado && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-center animate-pulse">
           <span className="text-xs font-bold text-red">
             ¡Límite de materias alcanzado!
           </span>
        </div>
      )}

    </div>
  );
};