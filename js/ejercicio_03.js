/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
 */
let palabras = '';
do {

    let texto = prompt('Ingrese una cadena de texto o presione CANCELAR para dejar de hacerlo:');
  
    palabras = palabras +' - '+ texto;
  
  } while (confirm('¿Desea ingresar otra cadena de texto?'));

    alert(palabras);
