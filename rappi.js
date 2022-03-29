let boton=document.getElementById("boton")
boton.addEventListener("click", escuchar)
    function escuchar(event){
        event.preventDefault()
        let cantidad=document.getElementById("cantidad").value
        console.log("hizo click")
        let categoria=document.getElementById("categoria").value
        console.log(categoria)
        
        if(categoria=="hamburguesa"){
            alert("El valor a pagar es de $ " + (cantidad*8500))
        }else if(categoria=="cocacola"){
            alert("El valor a pagar es de $ " + (cantidad*5000))
        }else if(categoria=="pepsi"){
            alert("El valor a pagar es de $ " + (cantidad*4500))
        }else if(categoria=="perro"){
            alert("El valor a pagar es de $ " + (cantidad*5000))
        }else if(categoria=="sanduche"){
            alert("El valor a pagar es de $ " + (cantidad*4000))
        }else if(categoria=="salchipapas"){
            alert("El valor a pagar es de $ " + (cantidad*8000))
        }else if(categoria=="pizza"){
            alert("El valor a pagar es de $ " + (cantidad*6000))
        }else if(categoria=="pollo"){
            alert("El valor a pagar es de $ " + (cantidad*12500))
        }else if(categoria=="empanada"){
            alert("El valor a pagar es de $ " + (cantidad*700))
        }else if(categoria=="tortachocolate"){
            alert("El valor a pagar es de $ " + (cantidad*25000))
            
        }
    }
    