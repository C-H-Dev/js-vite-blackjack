import _ from "underscore";

/**
 *
 * @param {Array<String>} tiposCarta ejemplo ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales ejemplo ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un Array de strings
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || !tiposEspeciales)
    throw new Error("TiposCarta y tiposEspeciales son obligatorios");
  if (tiposCarta.length === 0 || tiposEspeciales === 0)
    throw new Error("No pueden ser arreglos vacios");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

/**
 * Podemos tener una exportacion por defecto, con la siguiente
 * sintaxis
 */

//   export default crearDeck;
