//leer los 50 primeros numeros y contar cuantos multiplos de 3 hay, imprimir la cantidad
let cont3 = 0;
function multiplos3(){
for ( let i = 1; i <= 50; i++){
       if(i % 3 == 0){
       document.write("multiplo de 3 : " + i +'<br>');
       cont3++;
       }
    }
document.write("cantidad de multiplos de 3 de 1 al 50: " + cont3+'<br>');
console.log(cont3);
}
multiplos3();    




    
          
          
            


