let c = prompt('Ingrese valor convertir en Fahrenheit');

function fahrenheit(){
    let fahrenheit = (c*9/5)+32;
    console.log ("fahrenheit:",fahrenheit);
}
function centigrados(){
    let centigrados = (c-32)*(5/9);
    console.log ("centigrados:",centigrados);
}
fahrenheit();
centigrados();