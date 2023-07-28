/**
 * Se emcarga de crear la imagen de la carta en el archivo HTML
 * @param {string} carta
 * @returns Elemento img html
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("El parametro es necesario");

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
