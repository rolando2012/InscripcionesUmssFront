"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Componente del formulario
function StudentLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    codigoSIS: "",
    contrasena: "",
    dia: "1",
    mes: "1 - Enero",
    ano: "2010",
    codigo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const dias = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const meses = [
    "1 - Enero", "2 - Febrero", "3 - Marzo", "4 - Abril",
    "5 - Mayo", "6 - Junio", "7 - Julio", "8 - Agosto",
    "9 - Septiembre", "10 - Octubre", "11 - Noviembre", "12 - Diciembre"
  ];
  const anos = Array.from({ length: 50 }, (_, i) => (2024 - i).toString());

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.codigoSIS.trim()) {
      newErrors.codigoSIS = "El código SIS es requerido";
    }

    if (!formData.contrasena) {
      newErrors.contrasena = "La contraseña es requerida";
    } else if (formData.contrasena.length < 4) {
      newErrors.contrasena = "La contraseña debe tener al menos 4 caracteres";
    }

    if (!formData.codigo.trim()) {
      newErrors.codigo = "El código de verificación es requerido";
    } else if (formData.codigo.toUpperCase() !== "FKJ1480") {
      newErrors.codigo = "El código de verificación no coincide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Formulario válido:", formData);
      // Aquí iría la lógica de envío
      // Router push a otra pagina
      router.push("/inscripciones");
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen  from-primary/10 to-tertiary flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="bg-foreground text-primary rounded-t-2xl px-8 py-6 flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-lg backdrop-blur-sm">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">ESTUDIANTES</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-b-2xl shadow-2xl">
          <div className="bg-primary px-8 py-4 ">
            <div className="flex items-center gap-3">
              <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">
                i
              </div>
              <p className="text-foreground font-medium">
                Bienvenido al Servicio a Estudiantes de la UMSS.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Código SIS */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 w-48">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <label className="font-semibold text-black">Código SIS</label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="codigoSIS"
                  value={formData.codigoSIS}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-l-4 ${errors.codigoSIS ? 'border-red' : 'border-green'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background`}
                  placeholder="Ingrese su código SIS"
                />
                {errors.codigoSIS && (
                  <p className="text-red text-sm mt-1">{errors.codigoSIS}</p>
                )}
              </div>
            </div>

            {/* Contraseña */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 w-48">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <label className="font-semibold text-black">Contraseña</label>
              </div>
              <div className="flex-1">
                <input
                  type="password"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-l-4 ${errors.contrasena ? 'border-red' : 'border-green'} bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="Ingrese su contraseña"
                />
                {errors.contrasena && (
                  <p className="text-red text-sm mt-1">{errors.contrasena}</p>
                )}
              </div>
            </div>

            {/* Fecha de Nacimiento */}
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-3 w-48 pt-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <label className="font-semibold text-black">Fecha de Nacimiento</label>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-3">
                <select
                  name="dia"
                  value={formData.dia}
                  onChange={handleChange}
                  className="px-4 py-3 border-l-4 border-green bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {dias.map(dia => (
                    <option key={dia} value={dia}>{dia}</option>
                  ))}
                </select>
                <select
                  name="mes"
                  value={formData.mes}
                  onChange={handleChange}
                  className="px-4 py-3 border-l-4 border-green bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {meses.map(mes => (
                    <option key={mes} value={mes}>{mes}</option>
                  ))}
                </select>
                <select
                  name="ano"
                  value={formData.ano}
                  onChange={handleChange}
                  className="px-4 py-3 border-l-4 border-green bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {anos.map(ano => (
                    <option key={ano} value={ano}>{ano}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green px-4 py-2 rounded font-bold text-white text-lg tracking-wider">
                  FKJ1480
                </div>
                <p className="text-sm text-black">
                  Copie el código que aparece en la imagen de la izquierda
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 w-44">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <label className="font-semibold text-black">Código</label>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="codigo"
                    value={formData.codigo}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-l-4 ${errors.codigo ? 'border-red' : 'border-green'} bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="Ingrese el código"
                    maxLength={7}
                  />
                  {errors.codigo && (
                    <p className="text-red text-sm mt-1">{errors.codigo}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Botón de ingreso */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { StudentLoginForm };