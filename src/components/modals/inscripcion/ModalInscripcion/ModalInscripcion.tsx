'use client'
import React, { useState } from 'react';
import { RiBookMarkedLine, RiCloseLine} from 'react-icons/ri';
import { ModalidadOption } from '../ModalidadOption/ModalidadOption';
import { GroupCard } from '../GroupCard/GroupCard';

// Tipos
interface ScheduleItem {
  dia: string;
  horaInicio: string;
  horaFin: string;
  aula: string;
}
interface Group {
  id: number;
  name: string;
  teacher: string;
  schedule: ScheduleItem[];
  classroom: string;
}

interface ModalInscripcionProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  level: string;
  tipo?: string;
}

export const ModalInscripcion: React.FC<ModalInscripcionProps> = ({
  isOpen,
  onClose,
  title,
  code,
  level,
  tipo
}) => {
  const [modalidad, setModalidad] = useState<'normal' | 'mesa'>('normal');
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  // Datos de ejemplo de grupos
  const groups: Group[] = [
    {
      id: 1,
      name: 'Grupo 1',
      teacher: 'Lic. Peeters Ilonaa Magda Lena',
      schedule: [
        { dia: 'Martes', horaInicio: '09:45', horaFin: '11:15', aula: '691B' },
        { dia: 'Jueves', horaInicio: '06:45', horaFin: '08:15', aula: '661' }
      ],
      classroom: '691B'
    },
    {
      id: 2,
      name: 'Grupo 2',
      teacher: 'Lic. Peeters Ilonaa Magda Lena',
      schedule: [
        { dia: 'Jueves', horaInicio: '09:45', horaFin: '11:15', aula: '691B' },
        { dia: 'Viernes', horaInicio: '09:45', horaFin: '11:15', aula: '691C' }
      ],
      classroom: '691B'
    },
     {
      id: 3,
      name: 'Grupo 3',
      teacher: 'Lic. Peeters Ilonaa Magda Lena',
      schedule: [
        { dia: 'Lunes', horaInicio: '09:45', horaFin: '11:15', aula: '691B' },
        { dia: 'Miercoles', horaInicio: '09:45', horaFin: '11:15', aula: '691C' }
      ],
      classroom: '691B'
    }
  ];

  const handleInscribir = () => {
    if (selectedGroup === null) {
      alert('Por favor selecciona un grupo');
      return;
    }
    const selectedGroupData = groups.find(g => g.id === selectedGroup);
    if (selectedGroupData) {
      // Disparar evento personalizado con los datos de la materia inscrita
      const event = new CustomEvent('materiaInscrita', {
        detail: {
          title,
          code,
          group: selectedGroupData,
          modalidad
        }
      });
      window.dispatchEvent(event);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-2  shrink-0">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
              <RiBookMarkedLine className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary">
                Inscribirse a Materia
              </h2>
              <div className="mt-1 flex items-center justify-between gap-4">
                {/* 1. Contenedor para los textos (Columna izquierda) */}
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600 font-medium">{title}</p>
                  <p className="text-xs text-gray-500">{code} · {level}</p>
                </div>

                {/* 2. El Badge/Span (Elemento derecha) */}
                <span 
                  className={`shrink-0 px-3 py-1 text-sm rounded-full border 
                    ${tipo === 'Electiva' 
                      ? 'text-green-600 border-green-300' 
                      : 'text-gray-600 border-gray-300 '
                    }`}
                >
                  {tipo}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
          >
            <RiCloseLine className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        {/* Body - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 space-y-2">
          <hr className=" border border-gray-300" />
          {/* Modalidad de Inscripción */}
          <div>
            <h3 className="font-semibold text-black mb-3">
              Modalidad de Inscripción
            </h3>
            <div className="space-y-3">
              <ModalidadOption
                isSelected={modalidad === 'normal'}
                onClick={() => setModalidad('normal')}
                title="Modalidad Normal"
                subtitle="Clases regulares"
                description="Inscipción regular con asistencia a clases según horario. Aparece en la vista del horario."
              />
              <ModalidadOption
                isSelected={modalidad === 'mesa'}
                onClick={() => setModalidad('mesa')}
                title="Modalidad Mesa"
                subtitle="Solo examen"
                description="Inscipción solo para rendir examen. No aparece en el horario pero cuenta para el total de materias."
              />
            </div>
          </div>

          {/* Seleccionar el grupo */}
          <div>
            <h3 className="font-semibold text-black mb-3">
              Seleccionar el grupo
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {groups.map(group => (
                <GroupCard
                  key={group.id}
                  group={group}
                  isSelected={selectedGroup === group.id}
                  onClick={() => setSelectedGroup(group.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 shrink-0 flex justify-end">
          <button
            onClick={handleInscribir}
            className="mr-3 px-3 py-2 bg-primary text-white font-medium rounded-lg cursor-pointer
                     hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98]
                     shadow-lg hover:shadow-xl"
          >
            Inscribir Materia
          </button>
        </div>
      </div>
    </div>
  );
};