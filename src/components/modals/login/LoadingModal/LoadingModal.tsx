"use client";

import React from "react";

type Props = {
  open: boolean;
  title?: string;
  subtitle?: string;
};

export default function LoadingModal({
  open,
  title = "Iniciando sesión...",
  subtitle = "Comprobando credenciales y cargando tu información.",
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden
      />
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl p-6 text-center"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{ background: "var(--color-foreg)" }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* spinner */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-primary/20">
            <svg
              className="animate-spin w-10 h-10 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold" style={{ color: "var(--color-black)" }}>
            {title}
          </h3>
          <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
