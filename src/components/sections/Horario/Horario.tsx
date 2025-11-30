'use client'
import React, { useState, useEffect } from 'react';
import { Title, SubTitle, Card } from '@/components';

interface ScheduleItem {
  dia: string;
  horaInicio: string;
  horaFin: string;
  aula: string;
}

interface MateriaInscrita {
  title: string;
  code: string;
  schedule: ScheduleItem[];
  colorClass: string;
  modalidad: 'normal' | 'mesa';
}

interface HorarioProps {}

const SUBJECT_COLORS = [
  "bg-blue-100 border-blue-300 text-blue-800",
  "bg-green-100 border-green-300 text-green-800",
  "bg-purple-100 border-purple-300 text-purple-800",
  "bg-orange-100 border-orange-300 text-orange-800",
  "bg-pink-100 border-pink-300 text-pink-800",
  "bg-teal-100 border-teal-300 text-teal-800",
  "bg-indigo-100 border-indigo-300 text-indigo-800",
  "bg-red-100 border-red-300 text-red-800",
  "bg-yellow-100 border-yellow-300 text-yellow-800",
];

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const horarios = [
  { inicio: '06:45', fin: '08:15' },
  { inicio: '08:15', fin: '09:45' },
  { inicio: '09:45', fin: '11:15' },
  { inicio: '11:15', fin: '12:45' },
  { inicio: '12:45', fin: '14:15' },
  { inicio: '14:15', fin: '15:45' },
  { inicio: '15:45', fin: '17:15' },
  { inicio: '17:15', fin: '18:45' },
  { inicio: '18:45', fin: '20:15' },
  { inicio: '20:15', fin: '21:45' },
];

export const Horario: React.FC<HorarioProps> = () => {
  const [materiasInscritas, setMateriasInscritas] = useState<MateriaInscrita[]>([]);

  useEffect(() => {
    const handleMateriaInscrita = (event: any) => {
      const { title, code, group, modalidad } = event.detail;
      
      // Solo agregar si es modalidad normal
      if (modalidad !== 'normal') return;
      
      // Asignar color (rotar entre los colores disponibles)
      const colorClass = SUBJECT_COLORS[materiasInscritas.length % SUBJECT_COLORS.length];
      
      const nuevaMateria: MateriaInscrita = {
        title,
        code,
        schedule: group.schedule,
        colorClass,
        modalidad
      };
      
      setMateriasInscritas(prev => [...prev, nuevaMateria]);
    };

    window.addEventListener('materiaInscrita', handleMateriaInscrita);
    return () => window.removeEventListener('materiaInscrita', handleMateriaInscrita);
  }, [materiasInscritas.length]);

  const getMateriasEnCelda = (dia: string, horaInicio: string) => {
    return materiasInscritas.filter(materia => 
      materia.schedule.some(sch => 
        sch.dia === dia && sch.horaInicio === horaInicio
      )
    );
  };

  return (
    <div className="lg:col-span-6">
      <Card className="flex flex-col h-full min-h-0">
        <div className="shrink-0">
          <Title title="Vista de Horario" className="m-0" />
        </div>
        
        {/* Marco que contiene el ícono, título y tabla */}
        <div className="border border-secondary rounded-lg px-4 py-2 flex flex-col flex-1 min-h-0">
          <div className="flex items-center gap-2 mb-1 shrink-0">
            <svg className="w-5 h-5 text-letras" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
            </svg>
            <SubTitle subtitle="Horario Semanal" className="m-0" />
          </div>
          
          {/* Tabla con scroll en medianas y grandes */}
          <div 
            className="
              overflow-x-auto 
              flex-1 min-h-0
              md:overflow-y-auto md:max-h-[500px]
              lg:overflow-y-auto lg:max-h-[560px]
              xl:overflow-y-visible xl:max-h-none
              rounded-lg"
            role="region"
            aria-label="Tabla de horario semanal"
          >
          <table className="w-full min-w-[600px]">
            <thead className="sticky top-0 bg-white z-10 ">
              <tr>
                <th className="border-b border-secondary bg-backg px-2 py-2 text-xs lg:text-sm font-semibold text-letras text-center min-w-20">
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </th>
                {dias.map((dia) => (
                  <th 
                    key={dia} 
                    className="border-b border-secondary bg-backg px-2 py-2 text-xs lg:text-sm font-semibold text-letras text-center min-w-[90px]"
                  >
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="border-y border-secondary px-2 py-3 text-xs lg:text-sm text-letras text-center font-medium bg-backg">
                    <div className="flex flex-col">
                      <span>{horario.inicio}</span>
                      <span>{horario.fin}</span>
                    </div>
                  </td>
                  {dias.map((dia) => {
                    const materias = getMateriasEnCelda(dia, horario.inicio);
                    return (
                      <td 
                        key={`${dia}-${index}`} 
                        className="border-y border-secondary p-0 text-center hover:bg-blue-50 cursor-pointer transition-colors"
                      >
                        {materias.length > 0 ? (
                          <div className="h-full w-full flex flex-col gap-1 p-1">
                            {materias.map((materia, idx) => (
                              <div 
                                key={idx}
                                className={`${materia.colorClass} border-2 rounded px-2 py-2 text-xs font-medium flex-1 flex flex-col items-center justify-center`}
                              >
                                <div className="font-semibold">{materia.title}</div>
                                <div className="text-[10px] mt-0.5">
                                  {materia.schedule.find(s => s.dia === dia && s.horaInicio === horario.inicio)?.aula}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="px-2 py-3 h-full w-full"></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
                  </div>
        </div>
      </Card>
    </div>
  );
};

export default Horario;