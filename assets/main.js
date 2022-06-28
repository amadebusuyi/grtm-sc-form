
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var age = $('.validate-input input[name="age"]');
    var course = $('.validate-input select[name="course"]');
    var laptop = $('.validate-input select[name="laptop"]');
    var phone = $('.validate-input input[name="phone"]');
    var interests = $('textarea[name="interests"]');
    var dope = $('textarea[name="dope"]');
    var impact = $('textarea[name="impact"]');

    $('#course-selection').change(function () {
        if (!['Story telling'].includes($(this).val())) {
            $('.hide-dropdown').show();
        } else {
            $('.hide-dropdown').hide();
        }
    });

    $('.validate-form').on('submit', function(e){
        e.preventDefault();
        var check = true;

        $(".contact100-form-btn i").removeClass("fa-long-arrow-right").addClass("fa-spinner fa-spin");
        $(".contact100-form-btn").disabled = true;
        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(phone).val().trim() == ''){
            showValidate(phone);
            check=false;
        }

        if($(age).val().trim() == ''){
            showValidate(age);
            check=false;
        }

        if($(course).val() == '' || $(course).val() == null){
            showValidate(course);
            check=false;
        }

        if(($(laptop).val() == '' || $(laptop).val() == null) && $(course).val() !== 'Story telling'){
            showValidate(laptop);
            check=false;
        }

        if($(dope).val() == '' || $(dope).val() == null){
            showValidate(dope);
            check=false;
        }

        if($(interests).val() == '' || $(interests).val() == null){
            showValidate(interests);
            check=false;
        }

        if($(impact).val() == '' || $(impact).val() == null){
            showValidate(impact);
            check=false;
        }

        if(!check){
            $(".contact100-form-btn i").removeClass("fa-spinner fa-spin").addClass("fa-long-arrow-right");
            $(".contact100-form-btn").disabled = false;
            return false;
        }

        let added = new Date().toISOString().slice(0, 16);

        const number = "2348178072324";

        const confirmEmail = async (email) => {
            firebase.database().ref('userInfo').on("value", function(snapshot){
                snapshot.forEach(function(child){
                    if (child.email.toLowerCase() === email.toLowerCase()) {
                        isRegistered = true;
                        return true;
                    }
                })
                return false;
            })
        }

        const checkEmail = await confirmEmail(email.val());

        if (checkEmail) alert('Email already registered');

        const uid = firebase.database().ref().child('userInfo').push().key;
        firebase.database().ref('userInfo/' + uid).set({
              name : name.val(),
              email : email.val(),
              phone : phone.val(),
              age : age.val(),
              impact : impact.val(),
              interests : interests.val(),
              dope : dope.val(),
              course: course.val(),
              added: added,
              laptop: laptop.val()
          },
          function(error){
              if(error){
                let wMsg = "Hello, I wanted to sign up for " +course.val()+" but an error occured and I would like to continue with the registration.";
                let msg = 
                '<div class="feedback area"><div style="text-align: center">'+
                    '<i class="fa fa-warning fa-4x animated tada bounce" style="background: linear-gradient(45deg,'+
                    '#fc00ff, #00dbde); color: #fff; border-radius: 50%; padding: 10px; position: relative;"></i></div>'+
                    '<h1 style="position: relative; text-align: center; margin-top: 10px">An error occured</h1><br>'+
                    '<p><small>Oops! A weird error prevented your registration data from submitting. No, that can\'t stop you, reach out to us to continue.</small></p>'+
                    '<h4 style="border-bottom: 2px dotted #999; margin: 15px 0;">For More Information</h4>'+
                    '<p>Ndifreke: 07039281103</p>'+
                    '<p>Joshua: 08178072324</p>'+
                    '<p>Adebowale: 08065348422</p>'+
                    '<p style="text-align: center"><small>- You can reach out to us for enquiries, guidance and other relevant information -</small></p>'+
                    '<div style="text-align:center"><a href="https://api.whatsapp.com/send?phone='+number+'&text='+wMsg+'" '+
                    'style="position: relative; top: 20px;'+ 
                    'background: linear-gradient(45deg, #fc00ff, #00dbde); padding: 10px; border-radius: 20px;'+
                    'color: #fff;">Connect on WhatsApp</a><br><br></div>'+
                '</div>';
                $(".wrap-contact100").html(msg);
                console.log(error);
              }
              else{

                let wMsg = "Hello, I just signed up for " +course.val() + "in the upcoming GRTM Academy summer camp";
                let msg = 
                '<div class="feedback area"><div style="text-align: center">'+
                    '<i class="fa fa-check fa-4x animated tada bounce" style="background: linear-gradient(45deg,'+
                    '#fc00ff, #00dbde); color: #fff; border-radius: 50%; padding: 10px; position: relative;"></i></div>'+
                    '<h1 style="position: relative; text-align: center; margin-top: 10px">Successful</h1><br>'+
                    '<p><small>Yay! You just signed up for this life changing opportunity and we are excited for you.</small></p>'+
                    '<p><small>Your application will be vetted and you will be contacted when it has been approved</small></p>'+
                    '<h4 style="border-bottom: 2px dotted #999; margin: 15px 0;">For More Information</h4>'+
                    '<p>Ndifreke: 07039281103</p>'+
                    '<p>Joshua: 08178072324</p>'+
                    '<p>Adebowale: 08065348422</p>'+
                    '<p style="text-align: center"><small>- You can reach out to us for enquiries, guidance and other relevant information -</small></p>'+
                    '<div style="text-align:center"><a href="https://api.whatsapp.com/send?phone='+number+'&text='+wMsg+'" '+
                    'style="position: relative; top: 20px;'+ 
                    'background: linear-gradient(45deg, #fc00ff, #00dbde); padding: 10px; border-radius: 20px;'+
                    'color: #fff;">Connect on WhatsApp</a><br><br></div>'+
                '</div>';
                $(".wrap-contact100").html(msg);
              }
          })

    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    $('.validate-form select').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);