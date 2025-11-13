import { Parrafo, SubTitle, Title } from '@/components'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen ">
      {/* Contenedor principal con grid responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 px-2 max-w-[1400px] mx-auto">
        
        {/* Sección 1: Inscribirse a Materias (izquierda) */}
        <div className="lg:col-span-3 bg-white border border-tertiary rounded-lg shadow-sm p-4 mr-1">
          <Title title="Inscribirse a Materias" className="m-0 mb-4" />
          <SubTitle subtitle="Buscar por materia" className="m-0 mb-3" />
          
          {/* Aquí irá el contenido del buscador y filtros */}
          <div className="h-[400px] border-2 border-dashed border-tertiary rounded flex items-center justify-center">
            <span className="text-secondary text-sm">Contenido pendiente</span>
          </div>
        </div>

        {/* Sección 2: Vista de Horario (centro) */}
        <div className="lg:col-span-6 bg-white border border-tertiary rounded-lg shadow-sm p-4">
          <Title title="Vista de Horario" className="m-0 mb-4" />
          <SubTitle subtitle="Horario Semanal" className="m-0 mb-3" />
          
          {/* Aquí irá la tabla de horarios */}
          <div className="h-[600px] border-2 border-dashed border-tertiary rounded flex items-center justify-center">
            <span className="text-secondary text-sm">Contenido pendiente</span>
          </div>
        </div>

        {/* Sección 3: Información de inscripción (derecha arriba) */}
        <div className="lg:col-span-3 bg-white border border-tertiary rounded-lg shadow-sm p-4 ml-1 ">
          <Title title="Información de inscripción" className="m-0 mb-4" />
          
          {/* Aquí irá el contenido de información */}
          <div className="h-[280px] border-2 border-dashed border-tertiary rounded flex items-center justify-center">
            <span className="text-secondary text-sm">Contenido pendiente</span>
          </div>
        </div>

        {/* Sección 4: Estado de Inscripción (derecha abajo) */}
        <div className="lg:col-span-3 lg:col-start-10 bg-white border border-tertiary rounded-lg shadow-sm p-4 ml-1 mt-1">
          <Title title="Estado de Inscripción" className="m-0 mb-4" />
          
          {/* Aquí irá el contenido del estado */}
          <div className="h-[280px] border-2 border-dashed border-tertiary rounded flex items-center justify-center">
            <span className="text-secondary text-sm">Contenido pendiente</span>
          </div>
        </div>

      </div>
    </div>
  )
}
