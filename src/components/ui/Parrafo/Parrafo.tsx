import { TituloFont } from '@/config/fonts';
import React from 'react'

interface ParrafoProps {
    parrafo: string;
    className?: string;
}

export const Parrafo = ({parrafo,className}:ParrafoProps) => {
  return (
    <div className={` m-3 ${className}`}>
        <p className={`${TituloFont.className} text-secondary antialiased text-sm font-normal`}>
            {parrafo}
        </p>
    </div>
  )
}
