export type Grupo = {
  id: number;
  nombreGrupo: string;
  horarios: any[]; // ajusta si tienes tipo específico
};

export type MateriaOferta = {
  materia: string;
  codigo: number;
  nivel: string;
  tipo: string;
  grupos: Grupo[];
};

export type OfertaResponse = {
  estudiante: {
    id: number;
    promedioAnterior: string; // viene como "56.00"
  };
  ofertaSugerida: MateriaOferta[];
};

export async function fetchOfertaAcademica(estudianteId: number): Promise<OfertaResponse> {
  const base = process.env.NEXT_PUBLIC_API_URL ?? '';
  const url = `${base.replace(/\/$/, '')}/materias/oferta-academica/${estudianteId}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching oferta academica: ${res.status} ${res.statusText}`);
  }
  const data = (await res.json()) as OfertaResponse;
  return data;
}

export type ScheduleItemApi = {
  dia: string;
  horaInicio: string; // ISO string
  horaFin: string;    // ISO string
  aula: string;
};

export type GrupoApi = {
  id: number;
  nombreGrupo: string;
  horarios: ScheduleItemApi[];
  docente?: string;
};

export type GruposResponse = {
  grupos: GrupoApi[];
};

export async function fetchGruposPorMateria(codigoMateria: number): Promise<GruposResponse> {
  const base = process.env.NEXT_PUBLIC_API_URL ?? '';
  const url = `${base.replace(/\/$/, '')}/materias/grupos/${codigoMateria}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching grupos: ${res.status} ${res.statusText}`);
  }
  const data = (await res.json()) as GruposResponse;
  return data;
}
