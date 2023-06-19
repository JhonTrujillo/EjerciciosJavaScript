//Llenar un arreglo con los primeros 100 numeros de la sucesion fibonacci
//
function fibinacci(num){
    const fibo =[0, 1]

    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]
        
    }
    console.log("El resultado es : "+ fibo[num]);
}
fibinacci(100);