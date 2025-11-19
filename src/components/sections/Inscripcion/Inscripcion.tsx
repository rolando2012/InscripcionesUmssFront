'use client'
import React from 'react';
import { Title, SubTitle, Card, CourseCard } from '@/components';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
        <div className='relative flex items-center py-2 m-0  ml-3 mr-1'>
          <MagnifyingGlassIcon className="h-6 w-6 text-secondary absolute ml-3" />
          <input
            type="text"
            name='search'
            placeholder="Buscar por materia..."
            className="w-full pr-3 pl-10 px-4 py-2 border border-secondary rounded-3xl 
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
            text-letras"
          />
        </div>
        <SubTitle subtitle="Filtrar por semestre" className="m-0 mb-3" />
        <div className='m-0 ml-3 mr-1'>
          <Select>
            <SelectTrigger className="w-full border border-secondary rounded-xl text-md 
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            text-letras ">
              <SelectValue placeholder="-Selecione el nivel-" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Niveles</SelectLabel>
                <SelectItem value="Todos">Todos los niveles</SelectItem>
                <SelectItem value="E">Nivel E</SelectItem>
                <SelectItem value="F">Nivel F</SelectItem>
                <SelectItem value="G">Nivel G</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <SubTitle subtitle="Lista de Materia Disponibles" className="m-0 mb-3" />
         <CourseCard
          title="Sistemas I"
          code="2010142"
          level="Nivel E"
          onViewGroups={handleViewGroups}
        />
        <div className="flex-1 min-h-0 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-500 text-sm">Contenido pendiente</span>
        </div>
      </Card>
    </div>
  );
};
