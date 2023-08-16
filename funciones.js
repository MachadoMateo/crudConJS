//variables globales
const d = document;
let campoTexto = d.querySelector(".texto");
let botonCrear = d.querySelector(".boton");
let tabla = d.querySelector(".table tbody");


botonCrear.addEventListener("click",function(){
    crearTarea();
});
let contar = 1;
function crearTarea() {
    if(campoTexto.value == ""){
        alert("Ingresa una tarea");
        return;
    }
    let fila = d.createElement("tr");
    fila.innerHTML =` <td> ${contar++} </td>
    <td> <span class="respuesta"> ${campoTexto.value} </span> </td>
    <td> <span class="botonEditar" onclick="editarTarea(this)"> ✍ </span> </td>
    <td> <span class="botonEliminar" onclick="eliminarTarea()"> ❌ </span> </td>`;
    tabla.appendChild(fila);
    campoTexto.value = "";
}
function eliminarTarea(){
    let botonEliminar = d.querySelector(".botonEliminar");
    let confirmar = confirm("¿desea eliminar esta tarea?");
    if(confirmar){
        //alert("El usuario elimino");
        botonEliminar.parentElement.parentElement.remove();
    }
}
campoTexto.addEventListener("keyup",function(e){
    //console.log(e.key);
    if( e.key == "Enter"){
        crearTarea();
    }
})
function editarTarea(icon){
    let encontrarfila =icon.closest("tr");
    let asignar = encontrarfila.querySelector(".respuesta");
    let nuevotexto = prompt("ingrese edicion")

    if(nuevotexto !== null){
        asignar.textContent = nuevotexto;
    }
    
    
    
    
}


//let respuesta = d.querySelector(".respuesta");
  //  respuesta.textContent = prompt("ingrese la edicion")