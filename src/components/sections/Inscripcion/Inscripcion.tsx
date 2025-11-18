import React from 'react';
import { Title, SubTitle, Card } from '@/components';

interface InscripcionProps {
  // puedes añadir props, ej. handlers o datos
}

export const Inscripcion: React.FC<InscripcionProps> = () => {
  return (
    <div className="lg:col-span-3">
      <Card className="flex flex-col h-full">
        <Title title="Inscribirse a Materias" className="m-0 mb-4" />
        <SubTitle subtitle="Buscar por materia" className="m-0 mb-3" />
        <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-500 text-sm">Contenido pendiente</span>
        </div>
      </Card>
    </div>
  );
};
