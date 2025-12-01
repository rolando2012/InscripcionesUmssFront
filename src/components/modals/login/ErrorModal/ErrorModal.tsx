"use client";

import React from "react";

type Props = {
  open: boolean;
  title?: string;
  message?: string;
  onClose?: () => void;
};

export default function ErrorModal({
  open,
  title = "Credenciales incorrectas",
  message = "Los datos que ingreso no coinciden. Verifica e inténtalo nuevamente.",
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay (no onClick — no cerrar al clicar fuera) */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-6"
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        style={{ background: "var(--color-foreg)" }}
      >
        {/* X superior derecho */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(220,53,69,0.12)" }}
          >
            <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex-1 pr-2">
            <h3 className="text-lg font-semibold" style={{ color: "var(--color-black)" }}>{title}</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--color-letras)" }}>{message}</p>
          </div>
        </div>

        {/* Footer: botón Cerrar en esquina inferior derecha */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-white border shadow-sm hover:shadow-md hover:bg-gray-50 text-sm
            transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            style={{ borderColor: "var(--color-tertiary)", color: "var(--color-black)" }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
