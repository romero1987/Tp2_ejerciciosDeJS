/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’
*/
let letrasDni = 0;
do{
const num = parseInt(prompt('Ingrese los numeros de DNI que desea consultar o presionar CANCELAR para dejar de hacerlo'));
if(isNaN(num)){
    alert('Usted no ingreso un numero')
}else if (num %23 == 1){
    alert(`La letra que le corresponde es la T`);
}else if(num %23 == 2){
    alert(`La letra que le corresponde es la R`);
}else if(num %23 == 3){
    alert(`La letra que le corresponde es la W`);
}else if(num %23 == 4){
    alert(`La letra que le corresponde es la A`);
}else if(num %23 == 5){
    alert(`La letra que le corresponde es la G`);
}else if(num %23 == 6){
    alert(`La letra que le corresponde es la M`);
}else if(num %23 == 7){
    alert(`La letra que le corresponde es la Y`);
}else if(num %23 == 8){
    alert(`La letra que le corresponde es la F`);
}else if(num %23 == 9){
    alert(`La letra que le corresponde es la P`);
}else if(num %23 == 10){
    alert(`La letra que le corresponde es la D`);
}else if(num %23 == 11){
    alert(`La letra que le corresponde es la X`);
}else if(num %23 == 12){
    alert(`La letra que le corresponde es la B`);
}else if(num %23 == 13){
    alert(`La letra que le corresponde es la N`);
}else if(num %23 == 14){
    alert(`La letra que le corresponde es la J`);
}else if(num %23 == 15){
    alert(`La letra que le corresponde es la Z`);
}else if(num %23 == 16){
    alert(`La letra que le corresponde es la S`);
}else if(num %23 == 17){
    alert(`La letra que le corresponde es la Q`);
}else if(num %23 == 18){
    alert(`La letra que le corresponde es la V`);
}else if(num %23 == 19){
    alert(`La letra que le corresponde es la H`);
}else if(num %23 == 20){
    alert(`La letra que le corresponde es la L`);
}else if(num %23 == 21){
    alert(`La letra que le corresponde es la C`);
}else if(num %23 == 22){
    alert(`La letra que le corresponde es la K`);
}else if(num %23 == 23)
    alert(`La letra que le corresponde es la E`);

}while (confirm('¿Desea ingresar otra cadena de texto?'));
