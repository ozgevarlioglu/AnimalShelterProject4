$(document).ready(function(){
    $( "#contactUsForm" ).validate({
        rules: {
            name: {
                required: true,
                minlength:2,

            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: "Email cant be empty",
                email: "Not valid email"
            },
            name: {
                required: "Name cant be empty",
            }
        }
    });

    $('.content').richText({
        leftAlign:false,
        centerAlign:true,
        rightAlign:true,
        justify:true,
    }); 
    
})