function valida_envio() {

   
    if (document.contacto.Nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.contacto.Nombre.focus()
        return 0;
    }
    
    
    
    if (document.contacto.Correo.value.length == 0) {
        alert("Tiene que escribir su Correo")
        document.contacto.Correo.focus()
        return 0;
    }

    if (document.contacto.Telefono.value.length == 0) {
        alert("Tiene que escribir su Telefono")
        document.contacto.Telefono.focus()
        return 0;
    }
    

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.contacto.submit();
}

