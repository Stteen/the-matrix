const title = document.querySelector('.title');
title.innerHTML = "STTARO";

/*buscamos en canvas usando el identificador*/
const canvas = document.getElementById('canv');

const body = document.querySelector('body');
body.style.margin = '0';
body.style.height = '200vh';
body.style.width = '100%';

/* <----- ----------------> */

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

    /*seleccionamos su contexto */
const ctx = canvas.getContext('2d');
/*nos guardamos su ancho y alto*/
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
/*dividimos en lienzo en columnas*/
const cols = Math.floor(w / 20) + 1;
/*comensamos a pintar desde arriba , cada columna arranca en cero*/
const ypos = Array(cols).fill(0);
/*seleccionamos un color para pintar y lo pintamos entero*/
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
/*creamos la funcion matrix*/
function matrix () {
  /*seleccionamos el color negro para pintar muy transparente*/
  ctx.fillStyle = '#0001';
   /*ponemos la capa cada vez que pinta*/
  ctx.fillRect(0, 0, w, h);

  /*seleccionamos el color verde y la fuente */
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  /*comensamos a pintar desde posicion y de cada columna , que me de la posicion y y un indice*/
  ypos.forEach((y, ind) => {
    /*calculamos un caracter al azar*/
    const text = generateRandomInteger(128);
    /*y la posicion x donde se dibuja*/
    const x = ind * 20;
    ctx.fillText(text, x, y);
    /*si la posicion y supera a 100 haz esto y decirle que vuelva arriba */
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    /* en caso contrario posicion vertical de esa columna la incrementas en 20 unidades*/
    else ypos[ind] = y + 20;
  });
}
/*le decimos que se ejecute cada 50 milisegundos*/
setInterval(matrix, 50);
