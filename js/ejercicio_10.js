/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas 
deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math
 */
const filas = parseInt(prompt('ingrese un numero de fila'));
const columnas = parseInt(prompt('ingrese un numero de columna'));

let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
document.write(`<tr>`);

for(let indicecolumnas = 0; indicecolumnas < columnas; indicecolumnas++){
document.write(`<td>${totalCeldas}</td>`);
totalCeldas --;
}
    document.write(`</tr>`);
}
    document.write(`</tbody></table>`);
