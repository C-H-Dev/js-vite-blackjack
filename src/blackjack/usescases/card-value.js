/**
 * Esta funcion toma el valor numerico de la carta recibida como parametro
 * @param {String} carta 
 * @returns valor numerico de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };