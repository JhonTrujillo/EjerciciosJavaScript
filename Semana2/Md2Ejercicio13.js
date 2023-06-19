//Llenar un arreglo con los primeros 100 numeros pares y muestres la suma de los elementos del arreglo
pares=[];
sumaPares = 0;
function numerospares(){
    for ( i = 2; i <= 200; i += 2){
        pares.push(i);
        sumaPares += i;
    }
    alert("El arreglo es : " + pares)  
    alert("La suma del arreglo es : " + sumaPares)  
    console.log("El arreglo es : " + pares)  
    console.log("La suma del arreglo es : " + sumaPares)  
}
numerospares();