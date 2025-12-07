import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Option = { value: string; label: string };

type FiltroProps = {
  value?: string;
  onChange?: (v: string) => void;
  options?: Option[]; // [{ value: 'Todos', label: 'Todos los niveles' }, ...]
};

export const Filtro: React.FC<FiltroProps> = ({ value = 'Todos', onChange, options }) => {
  // opciones por defecto (mantengo tus E/F/G)
  const defaultOptions: Option[] = [
    { value: 'Todos', label: 'Todos los niveles' },
    { value: 'E', label: 'Nivel E' },
    { value: 'F', label: 'Nivel F' },
    { value: 'G', label: 'Nivel G' },
  ];

  const opts = options && options.length > 0 ? options : defaultOptions;

  return (
    <div className='m-0 ml-3 mr-1 py-1'>
      <Select value={value} onValueChange={(v) => onChange?.(v)}>
        <SelectTrigger className="w-full border border-secondary rounded-xl text-md 
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        text-letras ">
          <SelectValue placeholder="-Selecione el nivel-" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Niveles</SelectLabel>
            {opts.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
