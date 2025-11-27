
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
        w-full text-left p-4 rounded-xl border-2 transition-all
        ${isSelected 
          ? 'border-[var(--color-primary)] bg-blue-50' 
          : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0
          ${isSelected 
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' 
            : 'border-gray-400'
          }
        `}>
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-[var(--color-black)]">{title}</h4>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
              {subtitle}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
};