       // Leer 10 precios de productos y calcular cuanto cuestan los 10 productos
       let totalCompra = 0;
       
       function precios(){
         for(i = 0; i <=3; i++){
            precioProducto = parseInt(prompt('Ingrese valor del producto'));
            totalCompra += precioProducto;
         }  
          console.log("El total de la compra es:"+ totalCompra);
          document.write("El total de la Compra es: " + totalCompra);
      }
       precios();
       
    
    


    
   
    

