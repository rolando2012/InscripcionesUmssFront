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

export const Filtro = () => {
  return (
    <div className='m-0 ml-3 mr-1 py-1'>
        <Select>
        <SelectTrigger className="w-full border border-secondary rounded-xl text-md 
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        text-letras ">
            <SelectValue placeholder="-Selecione el nivel-" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Niveles</SelectLabel>
            <SelectItem value="Todos">Todos los niveles</SelectItem>
            <SelectItem value="E">Nivel E</SelectItem>
            <SelectItem value="F">Nivel F</SelectItem>
            <SelectItem value="G">Nivel G</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
    </div>
  )
}
