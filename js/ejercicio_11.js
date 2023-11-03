/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */

let edad1 = prompt('ingrese la edad');
let nombre1 = prompt('ingrese el nombre');

let edad2 = prompt('ingrese la edad');
let nombre2 = prompt('ingrese el nombre');

let edad3 = parseInt(prompt('ingrese la edad'));
let nombre3 = prompt('ingrese el nombre');

let mayorEdad = Math.max(edad1, edad2, edad3);

if(mayorEdad == edad1){
    document.write(`El mayor es ${nombre1}`);
}else if (mayorEdad == edad2){
    document.write(`El mayor es ${nombre2}`)
}else{
    document.write(`El mayor es ${nombre3}`)
}

