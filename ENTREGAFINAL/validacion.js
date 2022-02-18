
$("#cotizacion").validate({

    submitHandler: function(form) {

        let nombre = $("#nombreTxt").val();
        let Apellido = $("#apellidoTxt").val();
        let suma = 0;
        if ($("#inlineCheckbox1").is(":checked")) {
            suma+= 7000
        }
        if ($("#inlineCheckbox2").is(":checked")) {
            suma+= 5000
        }
        let impuesto = suma*0.19;
        let total = suma + impuesto;   
        let mensaje = `Resumen:\nCliente: ${nombre} ${Apellido}\\nValor Neto Servicio: $${suma}\nIVA: $${impuesto}\nTotal a Pagar: $${total}`;
       
        if (confirm(mensaje)){
            form.reset();
        }
        
    
     },
    rules: {
        nombreTxt: {
            required: true,
            pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
            minlength:3,
            maxlength:30
        },
        rutNumb: {
            required:true,
            pattern:"[0-9]{8}-[0-9kK]{1}",
            
        },
        apellidoTxt: {
            pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
            required:true,
            maxlength:30
        },
        direccionTxt:{
            pattern:"^[\.a-zA-Z0-9 ]*$",
            required:true,
            minlength:3,
            maxlength:80,
        },
        comunaTxt: {
            required:true, 
        },
        tipoDevehiculo:{
            required:true
        },
        marcaTxt:{
            pattern:"[a-zA-Z]{1,48}",
            required:true,
            minlength:3,
            maxlength:20
        },
        modeloTxt:{
            pattern:"[a-zA-Z]{1,48}",
            required:true,
            minlength:3,
            maxlength:20
        },
        anioNumb:{
            required:true,
            number:true,
            maxlength:4
        },
        revisionTxt:{
            required:true
           
        },
        encargadoTxt:{
            required:true
           
        },
        fechaDeingreso:{
            required:true
           
        },
        fechaDetermino:{
            required:true
        
        },
        'lavado[]': {
            //Obligatorio, mínimo 1 opción seleccionada (checkboxes para elegir tipo de lavado)
            required: true,
            minlength: 1
        },
    },
    
    messages: {
        nombreTxt: {
            required: "Este campo es requerido",
            pattern: "Sólo puede contener letras",
            maxlength: "No puedes exceder los 30 dígitos",
            minlength: "Se requiere minimo 3 caracteres"
            },

        'lavado[]':{
            required: "Debes seleccionar una opción"
        }
    },

    //Si el error ocurre en un campo de tipo checkbox, el mensaje se despliega en una ubicación especial
    errorPlacement: function(error, element) {
        if (element.attr("name") == "lavado[]") {
            error.appendTo("#errorEspecial");
        } else {
            error.insertAfter(element);
        }
    }


})






// $("#ingreso").click(function(){{}












// if($(cotizacion).valid() == false){
    //         return;
    //     }
    //     let nombre = $("#nombreTxt").val()
    //     let rut = $("#rutNumb").val()
    //     let Apellido = $("#apellidoTxt").val()
    //     let direccion = $("#direccionTxt").val()
    //     let comuna = $("#comunaTxt").val()
    //     let vehículo = $("#tipoDevehiculo").val()
    //     let marca = $("#marcaTxt").val()
    //     let modelo = $("#modeloTxt").val()
    //     let anio = $("#anioNumb").val()
    //     let revision=$("#revisionTxt").val()
    //     let encargado=$("#encargadoTxt").val()
    //     let fecha=$("#fechaDeingreso").val()
    //     let hora=$("#fechaDetermino").val()
    
    //    })
    
