//Realizar un progrma que pida la base, el exponente y se ejecute el calculo sin uso de bibliotecas
function potencia(){
    let a = parseInt (prompt('Ingrese la base'));
    let b = parseInt (prompt('Ingrese el exponente'));
    let potencia = a**b;
    alert("La potencia es :"+ potencia)
 
}
potencia();