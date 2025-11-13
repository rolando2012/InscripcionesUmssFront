import React from 'react'
import { TituloFont } from '@/config/fonts'

interface SubTitleProps {
    subtitle: string;
    className?: string;
}

export const SubTitle = ({subtitle,className}: SubTitleProps) => {
  return (
    <div className={`${TituloFont.className} text-letras antialiased text-base font-medium m-3 ${className}`}
    >{subtitle}
    </div>
  )
}
