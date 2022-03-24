let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let estrato=document.getElementById("estrato").value
    console.log(estrato)
    let deuda=document.getElementById("deuda").value
    console.log(deuda)
    if(estrato=="1"){
        alert("el valor de la deuda es $ "+ (deuda-(deuda*0.4)))
    }else if(estrato=="2"){
        alert("el valor de la deuda es $ "+ (deuda-(deuda*0.3)))
    }else if(estrato=="3"){
        alert("el valor de la deuda es $ "+ (deuda-(deuda*0.2)))
    }
    else if(estrato=="4"){
        alert("No Recibe Descuento")
    }
    else if(estrato=="5"){
        alert("No Recibe Descuento")
    }
    else if(estrato=="6"){
        alert("No Recibe Descuento")
    }
    
}