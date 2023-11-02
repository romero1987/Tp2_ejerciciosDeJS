/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */
let num = parseInt(prompt('Ingrese un numero del 1 al 50'));
if(num > 50 || isNaN(num) || num <= 0){
    alert(`El valor ingresado es invalido`);
}else{
    for(let i = 0; i <= num; i++){

    for (let rep = 1; rep <= i; rep++) {
    document.write(`${rep}`);
    }
    document.write(`<br>`)
}
    }
