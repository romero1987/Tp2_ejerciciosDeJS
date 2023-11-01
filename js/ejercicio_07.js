/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  
de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */
let num = parseInt(prompt('Ingrese un numero del 1 al 50'));
if(num > 50 || isNaN(num) || num < 1){
    alert(`El valor ingresado es invalido`);
}else{
    for(let i = num; i > 0; i--){

    for (let rep = 0; rep < i; rep++) {
    document.write(`${i}`);
    }
    document.write(`<br>`)
}
    }