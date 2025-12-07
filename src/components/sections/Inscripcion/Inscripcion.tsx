'use client'
import React, { useState, useMemo } from 'react';
import { Title, SubTitle, Card, CourseCard, Buscador, Filtro } from '@/components';
import type { MateriaOferta } from '@/lib/api';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface InscripcionProps {
  estudianteId?: number;
  ofertaSugerida?: MateriaOferta[]; 
}

export const Inscripcion: React.FC<InscripcionProps> =({ estudianteId, ofertaSugerida = [] }) => {
  const [query, setQuery] = useState('');

  const fmtTipo = (t: string) => {
    if (!t) return '';
    const s = t.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1); // Regular / Electiva
  };

  // normaliza: quita acentos y pasa a minúsculas
  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // elimina diacríticos
      .toLowerCase();

  const filtered = useMemo(() => {
    if (!query) return ofertaSugerida;
    const q = normalize(query);
    return ofertaSugerida.filter((m) => normalize(m.materia).includes(q));
  }, [ofertaSugerida, query]);

  return (
    <div className="lg:col-span-3 flex flex-col h-full min-h-0">
      <Card className="flex flex-col flex-1 min-h-0">
        {/* Zona fija (no crece) */}
        <div className="shrink-0">
          <Title title="Inscribirse a Materias" className="m-0" />
          <SubTitle subtitle="Buscar por materia" className="m-0" />

          <div className="mt-2">
            {/* pasamos value y onChange al Buscador */}
            <Buscador value={query} onChange={(v) => setQuery(v)} />
          </div>

          <div className="mt-3">
            <SubTitle subtitle="Filtrar por semestre" className="m-0 mb-3" />
            <Filtro />
          </div>
        </div>

        <div className="mt-3 shrink-0">
          <SubTitle subtitle="Lista de Materias Disponibles" className="m-0 mb-2" />
        </div>

        <div
          className="
            mt-2
            overflow-y-auto
            pr-1
            border border-dashed border-gray-200 rounded-md p-2
            max-h-56 md:max-h-80
            lg:flex-1 lg:min-h-0 lg:max-h-[calc(100vh-12rem)]
            xl:max-h-[calc(100vh-9rem)]
            2xl:max-h-[calc(100vh-12rem)]
          "
          role="region"
          aria-label="Lista de materias (scrollable)"
        >
          <div className="space-y-2">
            {ofertaSugerida.length === 0 ? (
              <p>No hay materias sugeridas</p>
            ) : filtered.length === 0 ? (
              // Mensaje cuando hay oferta pero no hubo coincidencias
              <div className="flex items-center gap-2 text-[var(--color-letras)] p-3">
                <XCircleIcon className="h-6 w-6" style={{ color: 'var(--color-red)' }} />
                <span>No se encontró lo que ingresaste</span>
              </div>
            ) : (
              filtered.map((m) => (
                <CourseCard
                  key={m.codigo}
                  title={m.materia}
                  code={String(m.codigo)}
                  level={`Nivel ${m.nivel}`}
                  tipo={fmtTipo(m.tipo)}
                />
              ))
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
