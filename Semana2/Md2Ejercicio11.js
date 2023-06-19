//llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido
// del arreglo deben ser numeros pares partiendo de 2.

contpar = 0;
arregloPares=[];
function pares(){
for(i = 2; i <= 13; i++){
    let numero = parseInt (prompt('Ingrese Numero: '));
    if(numero % 2 == 0){
        contpar++;
        arregloPares.push(numero);
        console.log("El numero es par : "+ numero);
    } 
}
console.log("los numeros pares son : "+ arregloPares);
alert("los numeros pares son : "+ arregloPares);
}
pares(); 