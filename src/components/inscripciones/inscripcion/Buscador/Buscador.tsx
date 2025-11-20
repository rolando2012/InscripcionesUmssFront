'use client'
import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

export const Buscador = () => {
  return (
    <div className='relative flex items-center py-1 m-0  ml-3 mr-1'>
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
  )
}
