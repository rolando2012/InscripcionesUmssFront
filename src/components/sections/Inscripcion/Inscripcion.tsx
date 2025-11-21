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
        {/* --- Zona fija (no crece) --- */}
        <div className="shrink-0">
          <Title title="Inscribirse a Materias" className="m-0" />
          <SubTitle subtitle="Buscar por materia" className="m-0" />

          <div className="mt-2">
            <Buscador />
          </div>

          <div className="mt-3">
            <SubTitle subtitle="Filtrar por semestre" className="m-0 mb-3" />
            <Filtro />
          </div>
        </div>

        <div className="mt-3 shrink-0">
          <SubTitle subtitle="Lista de Materias Disponibles" className="m-0 mb-2" />
        </div>

        {/* --- Contenedor scroll independiente para CourseCard ---
            - max-h-56 limita la altura (aprox 2 items)
            - overflow-y-auto crea el scroll sólo en esta área
            - pr-2 evita que el contenido quede oculto por la barra de scroll
            - flex-none evita que este bloque haga crecer el Card */}
        <div
          className="mt-2 flex-none overflow-y-auto max-h-56 border border-dashed border-gray-200 rounded-md p-2 pr-3"
          role="region"
          aria-label="Lista de materias (scrollable)"
        >
          <div className="space-y-2">
            <CourseCard
            title="Sistemas I"
            code="2010142"
            level="Nivel E"
            tipo='Regular'
            onViewGroups={handleViewGroups}
          />
          <CourseCard
            title="Sistemas II"
            code="2010143"
            level="Nivel E"
            tipo='Electiva'
            onViewGroups={handleViewGroups}
          />
          <CourseCard
            title="Sistemas III"
            code="2010144"
            level="Nivel E"
            tipo='Regular'
            onViewGroups={handleViewGroups}
          />
          <CourseCard
            title="Sistemas IV"
            code="2010145"
            level="Nivel E"
            tipo='Electiva'
            onViewGroups={handleViewGroups}
          />
          <CourseCard
            title="Sistemas V"
            code="2010146"
            level="Nivel E"
            tipo='Regular'
            onViewGroups={handleViewGroups}
          />
          <CourseCard
            title="Sistemas VI"
            code="2010147"
            level="Nivel E"
            tipo='Electiva'
            onViewGroups={handleViewGroups}
          />
            {/* aquí podrás renderizar más CourseCard dinámicamente sin que la página haga scroll */}
          </div>
        </div>

        {/* opcional: un pequeño footer dentro del Card si quieres */}
        {/* <div className="mt-3 text-sm text-slate-500 flex-shrink-0">Mostrando X de Y materias</div> */}

      </Card>
    </div>
  );
};
