$(document).ready(function(){
//Close the responsive menu when clicking on an item
	$('.navbar-collapse li a:not(.dropdown-toggle)').bind('click touchstart', function () {
		$('.navbar-toggle:visible').click();
    });

//Scroll if you click on an item of the navbar
	$('.navbar-collapse li a').click(function(e) {
    	e.stopPropagation();

    var eid = $(this).attr('href');
    var top = $(eid).offset().top;

    $('html, body').animate({ scrollTop: top }, 800);
  });
    $(function() {
  $("form[name='needs-validation']").validate({
    rules: {
      firstname:{ 
        pattern:"[a-zA-Z]+",
        required:true
        },
      lastname:{
        required:"true",
        pattern:"[a-zA-Z]+"
      },
      email: {
        required: true,
        email: true
      },
      zipCode: {
        pattern:"[0-9,]",
        required: true,
        minlength: 5
      }
      },
      state: {
        required: true,
      },
    //Messages errors
    messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        zipCode: "Please provide your Zip Code",
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
      },
        email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
        });
    });
});
