/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos
 de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido
mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
 */
const nota = parseInt(prompt(`Ingrese su nota`));

if(nota <= 2){
    alert(`Nota ${nota}: Muy deficiente`)
}else if(nota <= 4){
    alert(`Nota: insuficiente`)
}else if(nota <=6){
    alert(`Nota ${nota}: suficiente`)
}else if(nota == 7){
    alert(`Nota ${nota}: bien`)
}else if(nota <= 9){
    alert(`Nota ${nota}: notable`)
}else if(nota <= 10){
    alert(`Nota ${nota}: sobresaliente`)
}else if(nota > 10){
    alert(`Nota ${nota}: numero erroneo`)
}else{
    alert(`Introduce un numero valido`)
}