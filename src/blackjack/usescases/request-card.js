/**
 * Esra funcion, retorna la ultima carta del deck
 * @param {Array<String>} deck Recibe el arreglo de string con las cartas barajadas
 * @returns Ultima carta del deck
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
  };