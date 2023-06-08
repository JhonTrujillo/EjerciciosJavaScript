let galones = prompt('Ingrese Cantidad de galones');

function centilitros(){
    let centilitros = galones * 378.5;
    console.log("Cantidad en centilitros", centilitros);
}
function litros(){
    let litros = galones * 3.785;
    console.log("Cantidad en litros", litros);
}
function pagar(){
    let pagar = ((galones * 378.5) * 25);
    console.log("Total a pagar es: ", pagar);
}
pagar();
litros();
centilitros();