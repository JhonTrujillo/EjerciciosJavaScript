
let salario = parseInt (prompt('Ingrese Salario'));

 if(salario < 699999){
        pension = salario*2/100;
        aux = salario*6/100;
        sueldo = salario-pension+aux;
        console.log("Su sueldo es:", sueldo);
 } if(salario >= 700000 && salario <= 999999){
        pension = salario*4/100;
        sueldo = salario-pension+12000;
        console.log("Su sueldo es:", sueldo);
 }else if(salario >= 1000000){
        pension = salario*6/100;
        sueldo = salario-pension;
        console.log("Su sueldo es:", sueldo);
 }  
    
          


