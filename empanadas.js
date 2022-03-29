let boton=document.getElementById("boton")
boton.addEventListener("click", escuchar)
    function escuchar(event){
        event.preventDefault()
        let cantidad=document.getElementById("cantidad").value
        console.log("hizo click")
        let empanada=document.getElementById("empanada").value
        console.log(empanada)
        
        if(empanada=="carne"){
            alert("El valor a pagar es de $ " + (cantidad*2000))
        }else if(empanada=="pollo"){
            alert("El valor a pagar es de $ " + (cantidad*2500))
        }else if(empanada=="papa"){
            alert("El valor a pagar es de $ " + (cantidad*2300))
        }else if(empanada=="paisa"){
            alert("El valor a pagar es de $ " + (cantidad*2400))
        }else if(empanada=="ranchera"){
            alert("El valor a pagar es de $ " + (cantidad*2800))
        }
    }