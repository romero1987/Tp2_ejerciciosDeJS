/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
let totalSumatoria= 0;
do {
    const num = parseInt(prompt('Ingrese los numeros que desee o presione CANCELAR para dejar de hacerlo'));
    if(isNaN(num)){
        alert('Usted no ingreso un numero')
    }else{
        totalSumatoria = totalSumatoria + num;
    }  
    
  } while (confirm('¿Desea ingresar otro numero?'));

    alert(`La suma total de los numeros ingresados es: ${totalSumatoria}`);