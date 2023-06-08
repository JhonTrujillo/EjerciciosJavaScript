let litros = prompt('Ingrese litros a convertir');

function centilitros(){
    let centilitros = litros * 100;
    console.log("Cantidad en Centilitros",centilitros);
}
function decilitros(){
    let decilitros = litros * 10;
    console.log("Cantidad en decilitros",decilitros);
}
function galones(){
    let galones = litros / 3.785;
    console.log("Cantidad en galones",galones);
}
function onzas(){
    let onzas = litros * 33.814;
    console.log("Cantidad en onzas",onzas);
}
centilitros();
decilitros();
galones();
onzas();


