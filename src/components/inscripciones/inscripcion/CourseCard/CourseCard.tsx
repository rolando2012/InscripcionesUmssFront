'use client';
import React, { useState, useEffect } from 'react';
import { RiBookMarkedLine } from "react-icons/ri";
import { ModalInscripcion } from '@/components/';
import { truncateString, capitalizeString } from '@/utils/stringUtils';

// Agregamos maxMaterias a los props
export const CourseCard: React.FC<{
  title: string;
  code: string;
  level: string;
  tipo: string;
  maxMaterias: number; 
}> = ({ title, code, level, tipo, maxMaterias }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inscrito, setInscrito] = useState<'normal' | 'mesa' | null>(null);
  
  // Nuevo estado local para saber cuántas materias hay en TOTAL en todo el sistema
  const [globalCount, setGlobalCount] = useState(0);

  useEffect(() => {
    // 1. Manejo del estado propio (si ESTA carta está inscrita)
    const handleInscripcionPropia = (event: any) => {
      const { title: titleInscrito, code: codeInscrito, modalidad } = event.detail;
      // Nota: Recuerda pasar 'title' puro al modal como corregimos antes
      if (codeInscrito === code) {
        setInscrito(modalidad);
      }
    };

    const handleDesinscripcionPropia = (event: any) => {
      const { code: codeDesinscrito } = event.detail;
      if (codeDesinscrito === code) {
        setInscrito(null);
      }
    };

    // 2. Manejo del conteo GLOBAL (para bloquear el botón)
    const handleGlobalIncrement = () => setGlobalCount(prev => prev + 1);
    const handleGlobalDecrement = () => setGlobalCount(prev => Math.max(0, prev - 1));

    window.addEventListener('materiaInscrita', handleInscripcionPropia);
    window.addEventListener('materiaInscritaMesa', handleInscripcionPropia);
    window.addEventListener('materiaDesinscrita', handleDesinscripcionPropia);

    // Escuchamos CUALQUIER inscripción para actualizar el contador global
    window.addEventListener('materiaInscrita', handleGlobalIncrement);
    window.addEventListener('materiaInscritaMesa', handleGlobalIncrement);
    window.addEventListener('materiaDesinscrita', handleGlobalDecrement);
    
    return () => {
      window.removeEventListener('materiaInscrita', handleInscripcionPropia);
      window.removeEventListener('materiaInscritaMesa', handleInscripcionPropia);
      window.removeEventListener('materiaDesinscrita', handleDesinscripcionPropia);
      
      window.removeEventListener('materiaInscrita', handleGlobalIncrement);
      window.removeEventListener('materiaInscritaMesa', handleGlobalIncrement);
      window.removeEventListener('materiaDesinscrita', handleGlobalDecrement);
    };
  }, [title, code]);

  const handleQuitar = () => {
    const event = new CustomEvent('materiaDesinscrita', {
      detail: {
        title,
        code,
        modalidad: inscrito
      }
    });
    window.dispatchEvent(event);
  };

  // Lógica de bloqueo:
  // Está bloqueado SI: (El límite se alcanzó) Y (Esta materia NO está inscrita)
  const isBlocked = (globalCount >= maxMaterias) && !inscrito;

  return (
    <>
      <div className={`bg-white rounded-xl border border-gray-200 p-2 
        shadow-md transition-shadow m-0 mb-3 ${isBlocked ? 'opacity-70' : 'hover:shadow-lg'}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <RiBookMarkedLine className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm xl:text-base font-semibold text-primary mb-1">
                {capitalizeString(truncateString(title, 26))}
              </h3>
              <p className="text-sm xl:text-base text-gray-500">
                {code} · {level}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className={`px-3 py-1 text-sm rounded-full 
                    ${tipo === 'Electiva' 
                      ? 'text-green-600 border border-green-300' 
                      : 'text-gray-600 border border-gray-300'}`}>
              {tipo}
            </span>
            
            <button
              disabled={isBlocked}
              onClick={inscrito ? handleQuitar : () => setIsModalOpen(true)}
              className={`py-2 px-3 text-xs xl:text-sm font-medium text-white rounded-lg transition-all 
                      transform shadow-lg 
                      ${inscrito 
                        ? 'bg-red hover:opacity-90 active:scale-95' 
                        : isBlocked 
                          ? 'bg-secondary cursor-not-allowed shadow-none' // Estado Bloqueado
                          : 'bg-primary hover:opacity-90 hover:scale-105 active:scale-95 hover:shadow-xl' // Estado Normal
                      }`}
            >
              {inscrito 
                ? (inscrito === 'normal' ? 'Quitar Grupo' : 'Quitar Mesa') 
                : (isBlocked ? 'Sin cupos' : 'Ver Grupos')
              }
            </button>
          </div>
        </div>
      </div>

      {!isBlocked && (
        <ModalInscripcion
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title} 
          code={code}
          level={level}
          tipo={tipo}
        />
      )}
    </>
  );
};