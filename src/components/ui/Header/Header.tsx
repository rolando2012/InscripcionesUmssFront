'use client';

import { useState,useEffect } from 'react';
import React from 'react';
import { useRouter,usePathname } from 'next/navigation';
import Image from 'next/image';
import { IoLogOutOutline } from 'react-icons/io5'; // Importa un ícono de salida
import { FederantFont as Federant } from '../../../config/fonts';
import { TangerineFont } from '../../../config/fonts';


export const Header = () => {
const [isLogged, setIsLogged] = useState<boolean | null>(null);
const router = useRouter();
const pathname = usePathname()
useEffect(() => {
    fetch('/api/me', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setIsLogged(Boolean(data.logged))
        
      })
      .catch(() => {
        setIsLogged(false)
       
      })
  }, [pathname])
const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    setIsLogged(false)
    router.push('/')
  }
  return (
    <header className="mx-2 my-1 p-1 rounded-xl bg-foreg shadow-sm">
      {/* Añadimos 'justify-between' para separar el contenido a la izquierda 
        y el botón a la derecha. 'w-full' para que ocupe todo el ancho.
      */}
      <div className="flex flex-row items-center justify-between w-full">
        {/* Contenido existente del logo y texto (a la izquierda) */}
        <div className="flex flex-row items-center gap-3 md:gap-4">
          <div className="shrink-0">
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
        
        {/* Botón de Salida (a la derecha) */}
        {isLogged ? (
        <button 
          className="flex items-center justify-center mr-3 p-2 rounded-lg bg-primary text-white hover:bg-primary/90 duration-150 ease-in-out shrink-0
          transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer"
          title="Cerrar Sesión" // Añade un título para accesibilidad
          onClick={() => logout()} // Agrega la función de cierre de sesión aquí
        >
          {/* El tamaño del ícono se ajusta con la propiedad 'size' */}
          <IoLogOutOutline size={24} /> 
        </button>
        ) : null}
      </div>
    </header>
  );
};