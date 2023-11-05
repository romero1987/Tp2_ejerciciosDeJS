/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
 */
let vocales= ['a', 'e', 'i', 'o', 'u'];
let texto = prompt('Ingrese un texto que desee:');
texto = texto.toLocaleLowerCase();
let posicion = 0;
let parar = false;
let letra = 0;
for(let i = 0;i < texto.length; i++){
    for(let j = 0; j < vocales.length; j++){
        letra = vocales[j];
        if(vocales[j] === texto.charAt(i)){
            posicion = i;
            parar = true;
            break;
        }
    }
    if(parar == true){
        break;
    }
}
document.write(`La vocal '${letra}' esta en la posicion ${posicion}`);

/* for(let i = 0; i <= texto.length; i++){
    if(texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u'){
        letras++;
    }
}
alert(`La cantidad de vocales son: ${letras}`); */