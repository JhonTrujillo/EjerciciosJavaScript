// Leer 12 notas de estudiantes y determinar cuantas aprobo y cuantas reprobo,
// dado un rango 0 a 10, reprueba cuando la nota esta entre 0 y 5

contaprobo = 0;
contreprobo = 0;
function estudiantes(){
for(i = 1; i <=12; i++){
 let notas = parseInt (prompt('Ingrese Nota: '));
 if(notas >= 0 && notas <= 5){
    contreprobo++;
    console.log("Materia reprobada : "+ contreprobo);
 }else {
    contaprobo++;
    console.log("Materia aprobada : "+ contaprobo);
  }
}
document.write("Materia Reprobada : "+contreprobo +"<br>");
document.write("Materia Aprobada : "+contaprobo);
}
estudiantes();
