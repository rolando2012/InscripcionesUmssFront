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
        <div className="flex-shrink-0">
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

        {/* --- Título de la lista --- */}
        <div className="mt-3 flex-shrink-0">
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

        {/* Estilos para la scrollbar (sólo afectan a este componente -> .scrollable-list) */}
        <style jsx>{`
          /* objetivo: mejorar visibilidad de la barra de scroll en WebKit y Firefox */
          .${/* hack para generar clase objetivo*/ ''} {
          }
        `}</style>
        {/* Usamos una clase inline via selector directo (no queremos tocar global.css). 
            A continuación definimos estilos dirigidos al DIV padre (usando selectores globales para WebKit/Firefox). */}
        <style jsx global>{`
          /* Aplica a cualquier elemento con overflow-y-auto dentro de este componente (la clase no es necesaria) */
          .overflow-y-auto::-webkit-scrollbar {
            width: 8px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 999px;
          }
          /* Firefox */
          .overflow-y-auto {
            scrollbar-width: thin;
            scrollbar-color: rgba(0,0,0,0.2) transparent;
          }
        `}</style>
      </Card>
    </div>
  );
};
