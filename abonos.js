let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let tribunal=document.getElementById("tribunal").value
    console.log(tribunal)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    alert("el precio es " + (tribunal*cantidad))
}