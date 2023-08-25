


   /* let usuario = [{
    nombre : "juan",
    cargo : "frontend",
    salario : 4500000
  },
 {nombre : "mateo",
  cargo : "developer",
  salario : 4899999
}]*/

  //necesitamos JSON para la intercomunicacion de la base de datos y apis 
  // y tiene dos metodos uno llamado json.parse(convierte de texto a estado original)
  // y json.stringfy(lo convierte en texto)
  //guardar datos en el navegador
  ///localStorage.setItem("datos", JSON.stringify(usuario));
 
  
    
  
  /*let datos =JSON.parse(localStorage.getItem("datos"))
  document.write("nombre : "+datos.nombre+"<br>")
  document.write("cargo : "+datos.cargo+"<br>")
  document.write("salario : "+datos.salario+"<br>")*/   


  //variables globales
  const d = document;
  let nombre = d.querySelector(".nombre-pro");
  let presentacion = d.querySelector(".presentacion-pro");
  let precio = d.querySelector(".precio-pro");
  let imagen= d.querySelector(".imagen-pro")
  let btnguardar = d.querySelector(".btn-guardar");

  //agregar evento al boton
  btnguardar.addEventListener("click", function(){
    obtenerDatos();
   /* alert("nombre: "+ nombre.value + "\n"
    +"presentacion: "+ presentacion.value+"\n"
    +"precio: "+precio.value+"\n"
    +"urlimagen: "+ imagen.value+"\n"
    );*/
  })


  //funcion para obtener los datos del formulario
  function obtenerDatos(){
    if (nombre.value == ""||
        presentacion.value == ""||
        precio.value == "" ||
        imagen.value == "" ) {
            alert("debes escribir un campo");
            return;
        
    }
    let datos = {
        "nombre": nombre.value,
        "presentacion": presentacion.value,
        "precio": precio.value,
        "imagen": imagen.value
    }
    nombre.value = "";
    presentacion.value = "";
    precio.value = "";
    imagen.value = "";

    console.log(datos)
    guardarDatos(datos)
  }
  let productosKey = "productos"
  //funcion para guardar los datos en localstorage
  function guardarDatos( objeto ){
    let productos = [];
    let proGuardadosEnLocal = JSON.parse( localStorage.getItem(productosKey));
    if (proGuardadosEnLocal != null) {
        productos = proGuardadosEnLocal;
        
    }
    //guardar producto nuevo

    productos.push(objeto);
    //guardar local
    localStorage.setItem(productosKey, JSON.stringify(productos));
    alert("productos guardados con exito");
  }