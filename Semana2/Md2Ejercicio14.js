//Llenar un arreglo de tamaño n que se llene con numeros ingresados por el usuario 
//y determinar cantidad de positivos y negativos.

contPositivo = 0;
contNegativo = 0;
arreglo=[];
function positivonegativo(){
for(i = 0; i <= 5; i++){
    let numero = parseInt (prompt('Ingrese Numero: '));
    arreglo.push(numero);
    if(numero >= 0){
        contPositivo++;
    }else{
        contNegativo++;    
    } 
}
alert("los numeros positivos son : "+ contPositivo);
alert("los numeros negativos son : "+ contNegativo);
console.log("los numeros positivos son : "+ contPositivo);
console.log("los numeros negativos son : "+ contNegativo);
}
positivonegativo(); 