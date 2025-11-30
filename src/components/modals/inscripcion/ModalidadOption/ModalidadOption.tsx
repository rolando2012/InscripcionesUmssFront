
'use client'
import React from 'react';

// Componente de Modalidad de Inscripción
interface ModalidadOptionProps {
  isSelected: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
  description: string;
}

export const ModalidadOption: React.FC<ModalidadOptionProps> = ({
  isSelected,
  onClick,
  title,
  subtitle,
  description
}) => {
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
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-base text-black">{title}</h4>
            <span className={`px-2 py-0.5 text-xs rounded-md 
            ${isSelected 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 text-gray-600'
          }`}>
              {subtitle}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
};