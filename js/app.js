$(function () {
  "use strict";

  // Form

  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          name: "required",
          name: "required",
          Address: "required",
          City: "required",
          
          Postal: {
            required: true,
            minlength: 5, 
          },
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          name: "Please enter your name",
          email: "Please enter a valid email address",
          message: "Please enter a message",
          City: "Please enter your city",
          Postal: "Please enter correct postal code",
        },
        /* submit via ajax */
        submitHandler: function (form) {
          var $submit = $(".submitting"),
            waitText = "Submitting...";

          $.ajax({
            type: "POST",
            url: "php/send-email.php",
            data: $(form).serialize(),

            beforeSend: function () {
              $submit.css("display", "block").text(waitText);
            },
            success: function (msg) {
              if (msg == "OK") {
                $("#form-message-warning").hide();
                setTimeout(function () {
                  $("#contactForm").fadeOut();
                }, 1000);
                setTimeout(function () {
                  $("#form-message-success").fadeIn();
                }, 1400);
              } else {
                $("#form-message-warning").html(msg);
                $("#form-message-warning").fadeIn();
                $submit.css("display", "none");
              }
            },
            error: function () {
              $("#form-message-warning").html(
                "Something went wrong. Please try again."
              );
              $("#form-message-warning").fadeIn();
              $submit.css("display", "none");
            },
          });
        },
      });
    }
  };
  contactForm();
});

let hireToggle=()=>{
    let hiring = document.getElementById("Hour"); 
    let lbl = document.getElementById("lbl"); 
    hiring.classList.remove("rate-display");
    lbl.classList.remove("rate-display");
    
}
let notHire=()=>{
    let lbl = document.getElementById("lbl"); 
    let hiring = document.getElementById("Hour"); 
    hiring.classList.add("rate-display");
    lbl.classList.add("rate-display");

}