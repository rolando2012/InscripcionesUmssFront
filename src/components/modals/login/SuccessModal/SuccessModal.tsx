"use client";

import React from "react";

type Props = {
  open: boolean;
  title?: string;
  message?: string;
  onClose?: () => void;
};

export default function SuccessModal({
  open,
  title = "Ingreso exitoso",
  message = "Has iniciado sesión correctamente. Redirigiendo...",
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl p-6 text-center"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{ background: "var(--color-foreg)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(0,128,0,0.12)" }}>
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold" style={{ color: "var(--color-black)" }}>{title}</h3>
          <p className="text-sm" style={{ color: "var(--color-letras)" }}>{message}</p>
        </div>

        <div className="absolute top-3 right-3">
          <button onClick={onClose} aria-label="Cerrar" className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
      </div>
    </div>
  );
}
