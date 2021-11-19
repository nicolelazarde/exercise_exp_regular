let formulario = document.getElementById('formulario');
let correo = document.getElementById('email');

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value)){
         alert("le falta un arroba a la dirección de email");
    } else{
        alert("¡Mensaje enviado exitosamente!")
    }
   

})