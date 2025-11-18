import React from 'react';
import { Title, Card } from '@/components';

interface EstadoProps {}

export const Estado: React.FC<EstadoProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
      <Title title="Estado de Inscripción" className="m-0 mb-4" />
      <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
        <span className="text-gray-500 text-sm">Contenido pendiente</span>
      </div>
    </div>
  );
};
