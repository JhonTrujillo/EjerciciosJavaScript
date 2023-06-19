//Leer n cantidad de numeros y determinar cantidad de impares, imprimir cantidad de impares
contimpar = 0;
function impares(){
for(i = 0; i <= 4; i++){
    let numero = parseInt (prompt('Ingrese Numero: '));
    if(numero % 2 !== 0){
        contimpar++;
        console.log("El numero es impar : "+ numero);
    } 
}  

console.log("la cantidad de numeros impares es : "+ contimpar);
alert("la cantidad de numeros impares es : "+ contimpar);
}
impares();        
    

