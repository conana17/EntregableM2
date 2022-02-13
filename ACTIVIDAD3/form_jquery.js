
$("#formulariodeportivo").validate({
    rules: {
        nombrestxt: {
            required: true,
            minlength:3,
            maxlength:45


        },
        edadtxt: {
            required:true,
            number:true,
            min:5,
            max:99
        },
        primerapellidoTxt: {
            required:true,
            minlength:3,
            maxlength:45
        },
        segundoApellidotxt:{
            required:true,
            minlength:3,
            maxlength:45 
        },
        domiciliotxtx: {
            required:true,
            minlength:3,
            maxlength:60   
        },
        alergiaTxt:{
            required:true
        },
        medicamentosTxt:{
            required:true,
            minlength:3,
            maxlength:200 
        }




    }



})


$("#enviar").click(function(){
    if($(formulariodeportivo).valid() == false){
        return;
    }
    let nombre = $("#nombrestxt").val()
    let edad = $("#edadtxt").val()
    let primerApellido = $("#primerapellidoTxt").val()
    let segundoAapellido = $("#segundoApellidotxt").val()
    let direccion = $("#domiciliotxtx").val()
    let alergia = $("#alergiaTxt").val()
    let medcamentos = $("#medicamentosTxt").val()
   })

   
