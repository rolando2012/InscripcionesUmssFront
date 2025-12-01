'use client'
import React from 'react';
import { RiUserLine, RiTimeLine } from 'react-icons/ri';

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
  classroom?: string;
}

interface GroupCardProps {
  group: Group;
  isSelected: boolean;
  onClick: () => void;
  modalidad?: 'normal' | 'mesa';
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, isSelected, modalidad, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer
        ${isSelected 
          ? 'border-primary bg-blue-50' 
          : 'border-gray-200 bg-white hover:border-secondary hover:bg-gray-50'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0
          ${isSelected 
            ? 'border-primary bg-primary' 
            : 'border-gray-400'
          }
        `}>
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full" />
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-sm xl:text-base text-black mb-2">{group.name}</h4>
          
          <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-600 mb-1">
            <RiUserLine className="w-4 h-4" />
            <span>{group.teacher}</span>
          </div>
          
          <div className="flex flex-col gap-1">
            {modalidad === 'normal' && group.schedule.map((item, idx) => (
                <div key={idx}>
                  <span>{item.dia}</span>
                  <span>{item.horaInicio} - {item.horaFin}</span>
                  <span>{item.aula}</span>
                </div>
              ))}
              {/* {modalidad === 'mesa' && (
                <p className="text-sm text-gray-500 italic">
                  Modalidad mesa - Sin horario asignado
                </p>
              )} */}
          </div>
        </div>
      </div>
    </button>
  );
};