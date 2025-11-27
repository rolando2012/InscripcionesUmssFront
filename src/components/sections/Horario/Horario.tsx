import React from 'react';
import { Title, SubTitle, Card } from '@/components';

interface HorarioProps {}

export const Horario: React.FC<HorarioProps> = () => {
  return (
    <div className="lg:col-span-6">
      <Card className="flex flex-col h-full">
        <Title title="Vista de Horario" className="m-0 mb-4" />
        <SubTitle subtitle="Horario Semanal" className="m-0 mb-3" />
        
      </Card>
    </div>
  );
};
