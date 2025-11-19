import React from 'react';
import { Title, SubTitle, Card } from '@/components';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

interface InscripcionProps {
  // puedes añadir props, ej. handlers o datos
}

export const Inscripcion: React.FC<InscripcionProps> = () => {
  return (
    <div className="lg:col-span-3">
      <Card className="flex flex-col h-full">
        <Title title="Inscribirse a Materias" className="m-0 mb-3" />
        <SubTitle subtitle="Buscar por materia" className="m-0 mb-3" />
        <div className='relative flex items-center py-2 m-0 mb-3 ml-3'>
          <MagnifyingGlassIcon className="h-6 w-6 text-secondary absolute ml-3" />
          <input
            type="text"
            name='search'
            placeholder="Buscar por materia..."
            className="w-full pr-3 pl-10 px-4 py-2 border border-secondary rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent  "
          />
        </div>
        <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-500 text-sm">Contenido pendiente</span>
        </div>
      </Card>
    </div>
  );
};
