
'use client';
import React,{useState} from 'react';
import { RiBookMarkedLine } from "react-icons/ri";
import { ModalInscripcion } from '@/components/';

export const CourseCard: React.FC<{
  title: string;
  code: string;
  level: string;
  tipo: string;
}> = ({ title, code, level, tipo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <h3 className="text-base font-semibold text-primary mb-1">
                {title}
              </h3>
              <p className="text-base text-gray-500">
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
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-3 text-sm font-medium text-white rounded-lg transition-all 
                      transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl 
                      bg-primary hover:opacity-90"
            >
              Ver Grupos
            </button>
          </div>
        </div>
      </div>

      <ModalInscripcion
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        code={code}
        level={level}
        tipo={tipo}
      />
    </>
  );
};