
$("#cotizacion").validate({
    rules: {
        nombreTxt: {
            required: true,
            pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]",
            minlength:3,
            maxlength:30


        },
        rutNumb: {
            required:true,
            pattern:"[0-9]{8}-[0-9kK]{1}",
            min:0,
            maxlength:10
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
           
        }


    }



})


$("#ingreso").click(function(){
    if($(cotizacion).valid() == false){
        return;
    }
    let nombre = $("#nombreTxt").val()
    let rut = $("#rutNumb").val()
    let Apellido = $("#apellidoTxt").val()
    let direccion = $("#direccionTxt").val()
    let comuna = $("#comunaTxt").val()
    let vehículo = $("#tipoDevehiculo").val()
    let marca = $("#marcaTxt").val()
    let modelo = $("#modeloTxt").val()
    let anio = $("#anioNumb").val()
    let revision=$("#revisionTxt").val()
    let encargado=$("#encargadoTxt").val()
    let fecha=$("#fechaDeingreso").val()
    let hora=$("#fechaDetermino").val()

   })
