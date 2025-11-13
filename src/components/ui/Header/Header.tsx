import React from 'react'
import Image from 'next/image';
import { FederantFont as Federant } from '../../../config/fonts';
import { TangerineFont } from '../../../config/fonts';


export const Header = () => {
  return (
    <header className="mx-3 my-2 p-2 rounded-xl bg-foreground shadow-sm">
    <div className="flex flex-row items-center gap-3 md:gap-4">
        <div className="flex-shrink-0">
            <Image
                src="/logo-umss.svg"
                alt="Logo UMSS"
                width={55}
                height={75}
                priority
            />
            </div>

            <div className="flex flex-col items-start leading-tight">
                <div className={`${Federant.className} text-[18px] md:text-[20px]`}>
                    <span className="text-primary">webSISS.</span>
                    <span className="text-green">umss.edu.bo</span>
                </div>
                <div className={`${Federant.className} text-sm md:text-base text-primary font-medium`}>Sistema de Informacion San Simon</div>
            <div className={`${TangerineFont.className} text-[18px] md:text-[22px] text-primary`}>Universidad Mayor de San Simon</div>
        </div>
        </div>
    </header>
    
)
}
