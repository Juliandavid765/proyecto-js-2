let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let empanadas=document.getElementById("empanada").value
    console.log (empanadas)
    let nombre=document.getElementById("nombre").value
    console.log (nombre)
    let cedula=document.getElementById("cedula").value
    console.log (cedula)
    let correo=document.getElementById("correo").value
    console.log (correo)
    let cantidad=document.getElementById("cantidad").value
    console.log (cantidad)
}