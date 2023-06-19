//Leer n cantidad de sueldos de empleados y determinar el sueldo mas bajo,
//imprimir los sueldos y el sueldo mas bajo

for(i = 0; i <= 4; i++){
    let sueldo = parseInt (prompt('Ingrese Sueldo: '));
    if(sueldo >= 0){
        menor = Math.min(sueldo);
        console.log("El sueldo es : " + sueldo);
        console.log("El sueldo menor es : "+ menor);
    } 
      
}  

