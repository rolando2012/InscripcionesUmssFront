import React from 'react'
import { TituloFont } from '@/config/fonts'

interface SubTitleProps {
    subtitle: string;
    className?: string;
}

export const SubTitle = ({subtitle,className}: SubTitleProps) => {
  return (
    <div className={`mx-3 my-2 ${className}`}>
        <h2 className={`${TituloFont.className} text-letras antialiased text-base font-medium `}>
            {subtitle}
        </h2>
    </div>
  )
}
