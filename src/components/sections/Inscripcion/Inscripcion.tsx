'use client'
import React from 'react';
import { Title, SubTitle, Card, CourseCard, Buscador, Filtro } from '@/components';

interface InscripcionProps {}

export const Inscripcion: React.FC<InscripcionProps> = () => {
  return (
    <div className="lg:col-span-3 flex flex-col h-full min-h-0">
      <Card className="flex flex-col flex-1 min-h-0">
        {/* Zona fija (no crece) */}
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

        {/* Contenedor scroll:
            - móviles/medianos: mostrar 1-2 items (max-h fijo)
            - lg: permitir crecer pero con un max-height calculado en función del viewport
            - xl: incluso un poco más alto
            Ajusta los valores de "12rem" / "14rem" según el alto real de tu header/footer.
        */}
        <div
          className="
            mt-2
            overflow-y-auto
            pr-3
            border border-dashed border-gray-200 rounded-md p-2
            max-h-56 md:max-h-80
            lg:flex-1 lg:min-h-0 lg:max-h-[calc(100vh-12rem)]
            xl:max-h-[calc(100vh-14rem)]
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
              
            />
            <CourseCard
              title="Sistemas II"
              code="2010143"
              level="Nivel E"
              tipo="Electiva"
              
            />
            <CourseCard
              title="Sistemas III"
              code="2010144"
              level="Nivel E"
              tipo="Regular"
              
            />
            <CourseCard
              title="Ingles I"
              code="1803002"
              level="Nivel D"
              tipo="Regular"
            />
            <CourseCard
              title="Ingles II"
              code="1803002"
              level="Nivel E"
              tipo="Regular"
            />
              <CourseCard
              title="Ingles III"
              code="1803002"
              level="Nivel F"
              tipo="Regular"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
