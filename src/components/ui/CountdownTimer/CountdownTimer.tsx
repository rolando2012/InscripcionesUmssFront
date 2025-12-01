"use client";

import React, { useEffect, useState } from "react";
import { SubTitle } from "@/components";

type Duration = { hours?: number; minutes?: number; seconds?: number };

type Props = {
  endDate?: string; // ISO string con zona (ej: "2025-08-12T18:00:00-04:00")
  duration?: Duration; // alternativa: contar desde ahora por X horas/min/seg
  onFinishText?: string; // texto cuando llega a 0
  className?: string;
};

export default function CountdownTimer({
  endDate,
  duration,
  onFinishText = "Inscripción cerrada",
  className,
}: Props) {
  // calcula instante objetivo (ms)
  const calcTarget = () => {
    if (endDate) {
      const d = new Date(endDate);
      if (!isNaN(d.getTime())) return d.getTime();
    }
    // si no hay endDate, usamos duración desde ahora
    const now = Date.now();
    const h = duration?.hours ?? 0;
    const m = duration?.minutes ?? 0;
    const s = duration?.seconds ?? 0;
    return now + (h * 3600 + m * 60 + s) * 1000;
  };

  const [target] = useState<number>(() => calcTarget());
  const [remainingMs, setRemainingMs] = useState<number>(Math.max(0, target - Date.now()));

  useEffect(() => {
    // actualizar cada segundo
    const tick = () => {
      const rem = Math.max(0, target - Date.now());
      setRemainingMs(rem);
    };

    tick(); // primera actualización inmediata
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  // convertir a horas/minutos/segundos
  const totalSeconds = Math.floor(remainingMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const timeString =
    remainingMs === 0
      ? onFinishText
      : `${hours} ${hours === 1 ? "hora" : "horas"} ${minutes} ${minutes === 1 ? "minuto" : "minutos"} ${seconds} ${seconds === 1 ? "segundo" : "segundos"}`;

  return <SubTitle subtitle={timeString} className={className ?? "m-0 text-sm lg:text-base"} />;
}
