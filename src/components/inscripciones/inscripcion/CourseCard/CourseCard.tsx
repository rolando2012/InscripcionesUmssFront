
'use client';
import React,{useState, useEffect} from 'react';
import { RiBookMarkedLine } from "react-icons/ri";
import { ModalInscripcion } from '@/components/';

export const CourseCard: React.FC<{
  title: string;
  code: string;
  level: string;
  tipo: string;
}> = ({ title, code, level, tipo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inscrito, setInscrito] = useState<'normal' | 'mesa' | null>(null);

  const capitalizeString = (str: string): string => {
    if (!str) {
        return '';
    }

    // 1. Capitalización Estándar (primera letra mayúscula, resto minúscula)
    const lower = str.toLowerCase();
    const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);

    // 2. Definición de los sufijos romanos en minúscula
    const romanSuffixes = [' iii', ' ii', ' i'];

    let finalString = capitalized;

    // 3. Revisar y Reemplazar los sufijos
    for (const suffix of romanSuffixes) {
        // La condición de búsqueda debe ser con el sufijo en minúscula
        if (finalString.endsWith(suffix)) {
            const upperSuffix = suffix.toUpperCase();         
            finalString = finalString.replace(suffix, upperSuffix);
            break; 
        }
    }

    return finalString;
};

  React.useEffect(() => {
    const handleInscripcion = (event: any) => {
      const { title: titleInscrito, code: codeInscrito, modalidad } = event.detail;
      if (titleInscrito === title && codeInscrito === code) {
        setInscrito(modalidad);
      }
    };

    const handleDesinscripcion = (event: any) => {
      const { code: codeDesinscrito } = event.detail;
      if (codeDesinscrito === code) {
        setInscrito(null);
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

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-2 
        shadow-md hover:shadow-lg transition-shadow m-0 mb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <RiBookMarkedLine className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm xl:text-base font-semibold text-primary mb-1">
                {capitalizeString(title)}
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
              onClick={inscrito ? handleQuitar : () => setIsModalOpen(true)}
              className={`py-2 px-3 text-xs xl:text-sm font-medium text-white rounded-lg transition-all 
                      transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl 
                      ${inscrito ? 'bg-red hover:opacity-90' : 'bg-primary hover:opacity-90'}`}
            >
              {inscrito === 'normal' ? 'Quitar Grupo' : inscrito === 'mesa' ? 'Quitar Mesa' : 'Ver Grupos'}
            </button>
          </div>
        </div>
      </div>

      <ModalInscripcion
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={capitalizeString(title)}
        code={code}
        level={level}
        tipo={tipo}
      />
    </>
  );
};