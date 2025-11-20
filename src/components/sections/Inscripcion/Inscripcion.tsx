'use client'
import React from 'react';
import { Title, SubTitle, Card, CourseCard, Buscador, Filtro } from '@/components';
interface InscripcionProps {
  // puedes añadir props, ej. handlers o datos
}

const handleViewGroups = () => {
    alert('Ver Grupos clicked');
  };

export const Inscripcion: React.FC<InscripcionProps> = () => {
  return (
    <div className="lg:col-span-3">
      <Card className="flex flex-col h-full">
        <Title title="Inscribirse a Materias" className="m-0 " />
        <SubTitle subtitle="Buscar por materia" className="m-0" />

        <Buscador />

        <SubTitle subtitle="Filtrar por semestre" className="m-0 mb-3" />
        
        <Filtro />

        <SubTitle subtitle="Lista de Materia Disponibles" className="m-0 mb-3" />
        <CourseCard
          title="Sistemas I"
          code="2010142"
          level="Nivel E"
          tipo='Regular'
          onViewGroups={handleViewGroups}
        />
        <CourseCard
          title="Sistemas I"
          code="2010142"
          level="Nivel E"
          tipo='Electiva'
          onViewGroups={handleViewGroups}
        />
        <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-500 text-sm">Contenido pendiente</span>
        </div>
      </Card>
    </div>
  );
};
