/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”.
 */
let texto = prompt('Ingrese el texto que desee');
if(isNaN(texto)){
    for(let i = texto.length-1; i >= 0; i--){
        document.write(`${texto.charAt(i)}`);
    }  
}else{
        alert('El valor ingresado es invalido');
}