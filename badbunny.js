let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let ciudad=document.getElementById("ciudad").value
    console.log(ciudad)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    if(ciudad=="medellìn"){
        alert("la fecha del concierto es el 8 de Agosto")
        alert("el precio de la boleta es $"+ cantidad*50000)
    }else if(ciudad=="bogotà"){
        alert("la fecha del concierto es el 11 de Agosto")
        alert("el precio de la boleta es $"+ cantidad*45000)
    }else if(ciudad=="cali"){
        alert("la fecha del concierto es el 15 de Agosto")
        alert("el precio de la boleta es $"+ cantidad*43500)
    }else if(ciudad=="otra ciudad"){
        alert("No hay concierto")
    }
}
    