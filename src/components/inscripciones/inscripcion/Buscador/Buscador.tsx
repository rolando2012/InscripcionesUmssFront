'use client'
import React, { useRef } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

type BuscadorProps = {
  value?: string;
  onChange?: (v: string) => void;
  onClear?: () => void;
};

export const Buscador: React.FC<BuscadorProps> = ({ value = '', onChange, onClear }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className='relative flex items-center py-1 m-0 ml-3 mr-1'>
      <MagnifyingGlassIcon className="h-6 w-6 text-secondary absolute ml-3" />
      <input
        ref={inputRef}
        type="text"
        name='search'
        placeholder="Buscar por materia..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full pr-10 pl-10 px-4 py-2 border border-secondary rounded-3xl 
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                text-letras"
      />
      {/* botón limpiar: mantuve estilo visual discreto y sin alterar tu input */}
      <button
        type="button"
        aria-label="Limpiar búsqueda"
        onClick={() => {
          onClear?.();
          // también enfocamos el input para mejor UX
          inputRef.current?.focus();
        }}
        className="absolute right-3 h-6 w-6 flex items-center justify-center"
      >
        <XMarkIcon className="h-5 w-5 text-secondary hover:text-gray-500 cursor-pointer"/>
      </button>
    </div>
  )
}
