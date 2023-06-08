// Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0
//alternnando e imprimir por consola.

    arreglo=[];     
    for(i = 0; i <= 4; i++){
     let binario = parseInt (prompt('Ingrese numero 1 y 0: '));
     if(binario >= 0 && binario <= 1){
     console.log("El numero es : "+ binario);
     arreglo.push(binario);
     }else{
        alert("El numero es diferente de 1 y 0");
     }
    }
    alert("El arrreglo es : " +arreglo);
    console.log("El arrreglo es : " +arreglo);
    
  
