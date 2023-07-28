import _ from "underscore";

/**
 * Archivo de barril
 * Para evitar tantas lineas de import, creamos un archivo
 * index.js en nuestra cartepa usescases.
 * 
 * Lo que nos permite importar desde ahi en una sola linea
 * los modulos que necesitamos desde la carpeta usescases.
 * 
 * Sino especificamos el archivo que esta dentro de la carpeta
 * usecases, tomo por defecto la llamada index.js
 */

import { crearCartaHTML,crearDeck,pedirCarta,valorCarta, turnoComputadora } from "./usescases";


/**
 * Para tomar lo que se exporta por defecto del modulo
 */
//import cualquierNombre from "./usescases/create-deck";

/**
 * Para darle un alias, en este caso a la funcion que estamos importando
 */
// import { crearDeck as crearNuevoDeck } from "./usescases/create-deck";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHTML = document.querySelectorAll("small");

deck = crearDeck(tipos, especiales);
console.log(deck);


// turno de la computadora


// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = crearCartaHTML(carta);
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosHTML[1], divCartasComputadora);
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosHTML[1], divCartasComputadora);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, deck, puntosHTML[1], divCartasComputadora);
});

btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck(tipos,especiales);

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
