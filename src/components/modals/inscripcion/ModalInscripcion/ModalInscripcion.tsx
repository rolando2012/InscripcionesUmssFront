'use client'
import React, { useState } from 'react';
import { RiBookMarkedLine, RiCloseLine} from 'react-icons/ri';
import { ModalidadOption } from '../ModalidadOption/ModalidadOption';
import { GroupCard } from '../GroupCard/GroupCard';

// Tipos
interface Group {
  id: number;
  name: string;
  teacher: string;
  schedule: string[];
  classroom: string;
}

interface ModalInscripcionProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  level: string;
}

export const ModalInscripcion: React.FC<ModalInscripcionProps> = ({
  isOpen,
  onClose,
  title,
  code,
  level
}) => {
  const [modalidad, setModalidad] = useState<'normal' | 'mesa'>('normal');
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  // Datos de ejemplo de grupos
  const groups: Group[] = [
    {
      id: 1,
      name: 'Grupo 1',
      teacher: 'Lic. Peeters Ilonaa Magda Lena',
      schedule: ['Martes 09:45 - 11:15 (691B)', 'Jueves 06:45 - 08:15 (661)'],
      classroom: '691B'
    },
    {
      id: 2,
      name: 'Grupo 2',
      teacher: 'Lic. Peeters Ilonaa Magda Lena',
      schedule: ['Jueves 09:45 - 11:15 (691B)', 'Viernes 09:45 - 11:15 (691C)'],
      classroom: '691B'
    }
  ];

  const handleInscribir = () => {
    if (selectedGroup === null) {
      alert('Por favor selecciona un grupo');
      return;
    }
    alert(`Inscripción exitosa al ${groups.find(g => g.id === selectedGroup)?.name}`);
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
              <p className="text-sm text-gray-600 mt-1">{title}</p>
              <p className="text-xs text-gray-500">{code} · {level}</p>
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
            className="mr-3 px-3 py-2 bg-primary text-white font-medium rounded-lg
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