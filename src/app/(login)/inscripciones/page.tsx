import { Parrafo, SubTitle, Title } from '@/components'
import React from 'react';

export default function Page() {
  return (
    // padre ocupa al menos toda la pantalla y permite que el grid crezca
    <div className="min-h-screen px-2 pb-2 flex flex-col">
      {/* grid ahora usa flex-1 para rellenar el alto disponible */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 w-full mx-auto flex-1">
        
        {/* Sección 1: Inscribirse a Materias (izquierda) */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4 flex flex-col">
          <Title title="Inscribirse a Materias" className="m-0 mb-4" />
          <SubTitle subtitle="Buscar por materia" className="m-0 mb-3" />
          
          <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">Contenido pendiente</span>
          </div>
        </div>

        {/* Sección 2: Vista de Horario (centro) */}
        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm p-4 flex flex-col">
          <Title title="Vista de Horario" className="m-0 mb-4" />
          <SubTitle subtitle="Horario Semanal" className="m-0 mb-3" />
          
          <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">Contenido pendiente</span>
          </div>
        </div>

        {/* Columna derecha con dos secciones */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          {/* Sección 3: Información de inscripción (derecha arriba) */}
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
            <Title title="Información de inscripción" className="m-0 mb-4" />
            <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Contenido pendiente</span>
            </div>
          </div>

          {/* Sección 4: Estado de Inscripción (derecha abajo) */}
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col flex-1">
            <Title title="Estado de Inscripción" className="m-0 mb-4" />
            <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Contenido pendiente</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
