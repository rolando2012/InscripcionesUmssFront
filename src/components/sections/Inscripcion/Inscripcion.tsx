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
      {/* añadí min-h-0 para que los hijos con overflow se comporten correctamente */}
      <Card className="flex flex-col h-full min-h-0">
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
            Explicación de la estrategia:
            - En pantallas pequeñas: limitar la altura con max-h para mostrar 1-2 items (max-h-56).
            - En pantallas medianas: aumentar la altura (md:max-h-80).
            - En pantallas grandes (lg): permitir que el contenedor crezca y ocupe el espacio disponible usando flex-1 + min-h-0.
        */}
        <div
          className="
            mt-2
            overflow-y-auto
            pr-3
            border border-dashed border-gray-200 rounded-md p-2
            max-h-56 md:max-h-80
            lg:flex-1 lg:min-h-0
          "
          role="region"
          aria-label="Lista de materias (scrollable)"
        >
          <div className="space-y-2">
            <CourseCard
              title="Sistemas I"
              code="2010142"
              level="Nivel E"
              tipo="Regular"
              onViewGroups={handleViewGroups}
            />
            <CourseCard
              title="Sistemas II"
              code="2010143"
              level="Nivel E"
              tipo="Electiva"
              onViewGroups={handleViewGroups}
            />
            <CourseCard
              title="Sistemas III"
              code="2010144"
              level="Nivel E"
              tipo="Regular"
              onViewGroups={handleViewGroups}
            />
            <CourseCard
              title="Sistemas IV"
              code="2010145"
              level="Nivel E"
              tipo="Electiva"
              onViewGroups={handleViewGroups}
            />
            <CourseCard
              title="Sistemas V"
              code="2010146"
              level="Nivel E"
              tipo="Regular"
              onViewGroups={handleViewGroups}
            />
            <CourseCard
              title="Sistemas VI"
              code="2010147"
              level="Nivel E"
              tipo="Electiva"
              onViewGroups={handleViewGroups}
            />
            {/* más CourseCard sin hacer scroll a la página */}
          </div>
        </div>

      </Card>
    </div>
  );
};
