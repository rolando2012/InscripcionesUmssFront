/**
 * Corta un string si excede el límite de caracteres y agrega "..." al final.
 * @param str El texto a cortar.
 * @param maxLength El número máximo de caracteres permitidos (por defecto 26).
 */
export const truncateString = (str: string, maxLength: number = 26): string => {
  // Verificación de seguridad por si str es null o undefined
  if (!str) return '';

  if (str.length > maxLength) {
    // Cortamos desde el inicio (0) hasta el límite (maxLength) y agregamos los puntos
    return str.slice(0, maxLength) + '...';
  }
  
  return str;
};

export const capitalizeString = (str: string): string => {
    if (!str) {
        return '';
    }

    // 1. Capitalización Estándar (primera letra mayúscula, resto minúscula)
    const lower = str.toLowerCase();
    const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);

    // 2. Definición de los sufijos romanos en minúscula
    const romanSuffixes = [' iii', ' ii', ' i'];

    let finalString = capitalized;

    // 3. Revisar y Reemplazar los sufijos
    for (const suffix of romanSuffixes) {
        // La condición de búsqueda debe ser con el sufijo en minúscula
        if (finalString.endsWith(suffix)) {
            const upperSuffix = suffix.toUpperCase();         
            finalString = finalString.replace(suffix, upperSuffix);
            break; 
        }
    }

    return finalString;
};
