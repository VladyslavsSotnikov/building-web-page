$(document).ready(function() {
	$(".send").click(function(){

		$(".error").hide();
		$(".error").removeClass("green")

		let name = $("#form-name").val();
		let email = $("#form-email").val();
		let phone = $("#form-phone").val();
		let message = $("#message").val();
		let check = $("#checkboxInput").prop("checked");

		let fail = ""

		if(name.length<3){
			fail =  "Imię musi zawierać minimum 3 znaki"
		}
		else if (!email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
			fail = "Wprowadzić poprawnie e-mail"
			email = ''
		}
		else if (isNaN(phone) || phone == ""){
			fail = "Wprowadzić poprawnie telefon"
			phone= ''
		}
		else if (message.length<20){
			fail = "Wprowadzić minimum 20 znaków"
			message = ''
		}
		else if(!check){
			fail = "Zaznać ptaszek"
		}

		if(fail != ""){
			$(".error").html(fail);
			$(".error").show();
		}

		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: {'name': name, 'email': email, 'phone': phone, 'message': message, 'check': check},
			success: function(data){
				if(data != ''){
					$(".error").html(data).addClass("green")
					$(".error").show();
					$("#form-name").val('');
					$("#form-email").val('');
					$("#form-phone").val('');
					$("#message").val('');
					$("#checkboxInput").prop("checked", false);
				}
			}
		})
	})
});