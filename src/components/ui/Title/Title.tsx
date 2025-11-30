import React from 'react'
import { TituloFont } from '@/config/fonts'

interface TitleProps {
    title: string;
    className?: string;
}

export const Title = ({title,className}: TitleProps) => {
  return (
    <div className={`m-3 ${className}`}>
        <h1 className={`${TituloFont.className} text-primary antialiased text-xl font-semibold 
          xl:text-2xl 2xl:text-3xl`}>
            {title}
        </h1>
    </div>
  )
}
