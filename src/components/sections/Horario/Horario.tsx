import React from 'react';
import { Title, SubTitle, Card } from '@/components';


interface HorarioProps {}

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
  return (
    <div className="lg:col-span-6">
      <Card className="flex flex-col h-full min-h-0">
        <div className="shrink-0">
          <Title title="Vista de Horario" className="m-0 mb-4" />
        </div>
        
        {/* Marco que contiene el ícono, título y tabla */}
        <div className="border border-secondary rounded-lg p-4 flex flex-col flex-1 min-h-0">
          <div className="flex items-center gap-2 mb-4 shrink-0">
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
              lg:overflow-y-auto
              xl:overflow-y-visible xl:max-h-none
              rounded-lg"
            role="region"
            aria-label="Tabla de horario semanal"
          >
          <table className="w-full min-w-[600px]">
            <thead className="sticky top-0 bg-white z-10 ">
              <tr>
                <th className="border-b border-secondary bg-backg px-2 py-2 text-xs lg:text-sm font-semibold text-letras text-center min-w-[80px]">
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
                  {dias.map((dia) => (
                    <td 
                      key={`${dia}-${index}`} 
                      className="border-y border-secondary px-2 py-3 text-center hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      {/* Celda vacía para agregar clases */}
                    </td>
                  ))}
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