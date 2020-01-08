//javascript validation

$(document).ready(function () {
	$('.u_name').keydown(function() {
		if ($('.u_name input').val().length == ' ') {
			$('.u_name').css('border', '2px solid red');

			$('.u_email').css('background', '#ccc');
			$('.u_email input').css('cursor', 'not-allowed');
			$('.u_email input').attr('disabled', 'disabled');

			$('.u_pass1').css('background', '#ccc');
      $('.u_pass1 input').css('cursor', 'not-allowed');
      $('.u_pass1 input').attr('disabled', 'disabled');

			$('.u_pass2').css('background', '#ccc');
      $('.u_pass2 input').css('cursor', 'not-allowed');
      $('.u_pass2 input').attr('disabled', 'disabled');

			$('.u_phone').css('background', '#ccc');
      $('.u_phone input').css('cursor', 'not-allowed');
      $('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
      $('.u_gen select').css('cursor', 'not-allowed');
      $('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
      $('.u_dob input').css('cursor', 'not-allowed');
      $('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
      $('.u_country select').css('cursor', 'not-allowed');
      $('.u_country select').attr('disabled', 'disabled');

      $('.btn').css('cursor', 'not-allowed');
      $('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_name').css('border', '2px solid green');

			$('.u_email').css('background', '#fff');
      $('.u_email input').css('cursor', 'auto');
      $('.u_email input').removeAttr('disabled', 'disabled');

      $('.u_pass1').css('background', '#fff');
			$('.u_pass1 input').css('cursor', 'auto');
      $('.u_pass1 input').removeAttr('disabled', 'disabled');
      
      $('.u_pass2').css('background', '#fff');
			$('.u_pass2 input').css('cursor', 'auto');
      $('.u_pass2 input').removeAttr('disabled', 'disabled');
      
      $('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
      $('.u_phone input').removeAttr('disabled', 'disabled');
      
      $('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
      $('.u_country select').removeAttr('disabled', 'disabled');
      
      $('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
  });
  
  $('.u_email').keydown(function() {
		if ($('.u_email input').val().length == '') {
			$('.u_email').css('border', '2px solid red');

			$('.u_pass1').css('background', '#ccc');
			$('.u_pass1 input').css('cursor', 'not-allowed');
			$('.u_pass1 input').attr('disabled', 'disabled');

			$('.u_pass2').css('background', '#ccc');
			$('.u_pass2 input').css('cursor', 'not-allowed');
			$('.u_pass2 input').attr('disabled', 'disabled');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_email').css('border', '2px solid green');

			$('.u_pass1').css('background', '#fff');
			$('.u_pass1 input').css('cursor', 'auto');
			$('.u_pass1 input').removeAttr('disabled', 'disabled');

			$('.u_pass2').css('background', '#fff');
			$('.u_pass2 input').css('cursor', 'auto');
			$('.u_pass2 input').removeAttr('disabled', 'disabled');

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
  });
  
$('.u_pass1').keydown(function() {
	if ($('.u_pass1 input').val().length == '') {
		$('.u_pass1').css('border', '2px solid red');

		$('.u_pass2').css('background', '#ccc');
		$('.u_pass2 input').css('cursor', 'not-allowed');
		$('.u_pass2 input').attr('disabled', 'disabled');

		$('.u_phone').css('background', '#ccc');
		$('.u_phone input').css('cursor', 'not-allowed');
		$('.u_phone input').attr('disabled', 'disabled');

		$('.u_gen').css('background', '#ccc');
		$('.u_gen select').css('cursor', 'not-allowed');
		$('.u_gen select').attr('disabled', 'disabled');

		$('.u_dob').css('background', '#ccc');
		$('.u_dob input').css('cursor', 'not-allowed');
		$('.u_dob input').attr('disabled', 'disabled');

		$('.u_country').css('background', '#ccc');
		$('.u_country select').css('cursor', 'not-allowed');
		$('.u_country select').attr('disabled', 'disabled');

		$('.btn').css('cursor', 'not-allowed');
		$('.btn').attr('disabled', 'disabled');
	} else {
		$('.u_pass1').css('border', '2px solid green');

		$('.u_pass2').css('background', '#fff');
		$('.u_pass2 input').css('cursor', 'auto');
		$('.u_pass2 input').removeAttr('disabled', 'disabled');

		$('.u_phone').css('background', '#fff');
		$('.u_phone input').css('cursor', 'auto');
		$('.u_phone input').removeAttr('disabled', 'disabled');

		$('.u_gen').css('background', '#fff');
		$('.u_gen select').css('cursor', 'auto');
		$('.u_gen select').removeAttr('disabled', 'disabled');

		$('.u_dob').css('background', '#fff');
		$('.u_dob input').css('cursor', 'auto');
		$('.u_dob input').removeAttr('disabled', 'disabled');

		$('.u_country').css('background', '#fff');
		$('.u_country select').css('cursor', 'auto');
		$('.u_country select').removeAttr('disabled', 'disabled');

		$('.btn').css('cursor', 'pointer');
		$('.btn').removeAttr('disabled', 'disabled');
	}
});
  
  $('.u_pass2').keydown(function() {
		if ($('.u_pass2 input').val().length == '') {
			$('.u_pass2').css('border', '2px solid red');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_pass2').css('border', '2px solid green'); 

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
  });
  
  $('.u_phone').keydown(function() {
		if ($('.u_phone input').val().length == '') {
			$('.u_phone').css('border', '2px solid red');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_phone').css('border', '2px solid green');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
  });
  
   $('.u_gen').keydown(function() {
			if ($('.u_gen select').val().length == '') {
				$('.u_gen').css('border', '2px solid red');

				$('.u_dob').css('background', '#ccc');
				$('.u_dob input').css('cursor', 'not-allowed');
				$('.u_dob input').attr('disabled', 'disabled');

				$('.u_country').css('background', '#ccc');
				$('.u_country select').css('cursor', 'not-allowed');
				$('.u_country select').attr('disabled', 'disabled');

				$('.btn').css('cursor', 'not-allowed');
				$('.btn').attr('disabled', 'disabled');
			} else {
				$('.u_gen').css('border', '2px solid green');

				$('.u_dob').css('background', '#fff');
				$('.u_dob input').css('cursor', 'auto');
				$('.u_dob input').removeAttr('disabled', 'disabled');

				$('.u_country').css('background', '#fff');
				$('.u_country select').css('cursor', 'auto');
				$('.u_country select').removeAttr('disabled', 'disabled');

				$('.btn').css('cursor', 'pointer');
				$('.btn').removeAttr('disabled', 'disabled');
			}
   });
  
  $('.u_dob').keydown(function() {
		if ($('.u_dob input').val().length == '') {
			$('.u_dob').css('border', '2px solid red');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_dob').css('border', '2px solid green');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

});

//mouse effect
$(document).ready(function() {
	$('.u_name').mousedown(function() {
		if ($('.u_name input').val().length == ' ') {
			$('.u_name').css('border', '2px solid red');

			$('.u_email').css('background', '#ccc');
			$('.u_email input').css('cursor', 'not-allowed');
			$('.u_email input').attr('disabled', 'disabled');

			$('.u_pass1').css('background', '#ccc');
			$('.u_pass1 input').css('cursor', 'not-allowed');
			$('.u_pass1 input').attr('disabled', 'disabled');

			$('.u_pass2').css('background', '#ccc');
			$('.u_pass2 input').css('cursor', 'not-allowed');
			$('.u_pass2 input').attr('disabled', 'disabled');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_name').css('border', '2px solid green');

			$('.u_email').css('background', '#fff');
			$('.u_email input').css('cursor', 'auto');
			$('.u_email input').removeAttr('disabled', 'disabled');

			$('.u_pass1').css('background', '#fff');
			$('.u_pass1 input').css('cursor', 'auto');
			$('.u_pass1 input').removeAttr('disabled', 'disabled');

			$('.u_pass2').css('background', '#fff');
			$('.u_pass2 input').css('cursor', 'auto');
			$('.u_pass2 input').removeAttr('disabled', 'disabled');

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_email').mousedown(function() {
		if ($('.u_email input').val().length == '') {
			$('.u_email').css('border', '2px solid red');

			$('.u_pass1').css('background', '#ccc');
			$('.u_pass1 input').css('cursor', 'not-allowed');
			$('.u_pass1 input').attr('disabled', 'disabled');

			$('.u_pass2').css('background', '#ccc');
			$('.u_pass2 input').css('cursor', 'not-allowed');
			$('.u_pass2 input').attr('disabled', 'disabled');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_email').css('border', '2px solid green');

			$('.u_pass1').css('background', '#fff');
			$('.u_pass1 input').css('cursor', 'auto');
			$('.u_pass1 input').removeAttr('disabled', 'disabled');

			$('.u_pass2').css('background', '#fff');
			$('.u_pass2 input').css('cursor', 'auto');
			$('.u_pass2 input').removeAttr('disabled', 'disabled');

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_pass1').mousedown(function() {
		if ($('.u_pass1 input').val().length == '') {
			$('.u_pass1').css('border', '2px solid red');

			$('.u_pass2').css('background', '#ccc');
			$('.u_pass2 input').css('cursor', 'not-allowed');
			$('.u_pass2 input').attr('disabled', 'disabled');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_pass1').css('border', '2px solid green');

			$('.u_pass2').css('background', '#fff');
			$('.u_pass2 input').css('cursor', 'auto');
			$('.u_pass2 input').removeAttr('disabled', 'disabled');

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_pass2').mousedown(function() {
		if ($('.u_pass2 input').val().length == '') {
			$('.u_pass2').css('border', '2px solid red');

			$('.u_phone').css('background', '#ccc');
			$('.u_phone input').css('cursor', 'not-allowed');
			$('.u_phone input').attr('disabled', 'disabled');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_pass2').css('border', '2px solid green');

			$('.u_phone').css('background', '#fff');
			$('.u_phone input').css('cursor', 'auto');
			$('.u_phone input').removeAttr('disabled', 'disabled');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_phone').mousedown(function() {
		if ($('.u_phone input').val().length == '') {
			$('.u_phone').css('border', '2px solid red');

			$('.u_gen').css('background', '#ccc');
			$('.u_gen select').css('cursor', 'not-allowed');
			$('.u_gen select').attr('disabled', 'disabled');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_phone').css('border', '2px solid green');

			$('.u_gen').css('background', '#fff');
			$('.u_gen select').css('cursor', 'auto');
			$('.u_gen select').removeAttr('disabled', 'disabled');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_gen').mousedown(function() {
		if ($('.u_gen select').val().length == '') {
			$('.u_gen').css('border', '2px solid red');

			$('.u_dob').css('background', '#ccc');
			$('.u_dob input').css('cursor', 'not-allowed');
			$('.u_dob input').attr('disabled', 'disabled');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_gen').css('border', '2px solid green');

			$('.u_dob').css('background', '#fff');
			$('.u_dob input').css('cursor', 'auto');
			$('.u_dob input').removeAttr('disabled', 'disabled');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});

	$('.u_dob').mousedown(function() {
		if ($('.u_dob input').val().length == '') {
			$('.u_dob').css('border', '2px solid red');

			$('.u_country').css('background', '#ccc');
			$('.u_country select').css('cursor', 'not-allowed');
			$('.u_country select').attr('disabled', 'disabled');

			$('.btn').css('cursor', 'not-allowed');
			$('.btn').attr('disabled', 'disabled');
		} else {
			$('.u_dob').css('border', '2px solid green');

			$('.u_country').css('background', '#fff');
			$('.u_country select').css('cursor', 'auto');
			$('.u_country select').removeAttr('disabled', 'disabled');

			$('.btn').css('cursor', 'pointer');
			$('.btn').removeAttr('disabled', 'disabled');
		}
	});
});

