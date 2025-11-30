import { TituloFont } from '@/config/fonts';
import React from 'react'

interface ParrafoProps {
    parrafo: string;
    className?: string;
}

export const Parrafo = ({parrafo,className}:ParrafoProps) => {
  return (
    <div className={` mx-3 my-2 ${className}`}>
        <p className={`${TituloFont.className} text-secondary antialiased text-sm font-normal
          xl:text-base 2xl:text-lg`}>
            {parrafo}
        </p>
    </div>
  )
}
