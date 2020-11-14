$(document).ready(function(){
	$('#form-register').on('submit', function(event){
		event.preventDefault();
		if($('#password').val() !== $('#cofirm-password').val()) {
			return $('#info').html('Password and confirm password do not match');
		}
		if(Number.isInteger($('#phone').val())){
			return $('#info').html('Please enter valid phone number');
		}
		if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($('#email').val())){
			return $('#info').html('Please enter a valid email address');
		}
		let user = {
			email: $('#email').val(),
			phone: $('#phone').val(),
            password: $('#password').val();
        };
        let url = 'localhost:8080/api/register';
        $.post({
            url: url,
            contentType: 'application/json',
            dataType: 'json',
            data: user,
            success: function(res) {
                console.log(res);
                if(res.code === 206) {
                    return $('#info').html('That phone does is already registered');
                }
                if(res.code === 200) {
                    return $('#info').html('Registration successful')
                }
                return $('#info').html('Something went wrong, please try again');
            }
        }).fail(err => $('#info').html('Something went wrong, please try again. Are you connected?'));
	});
});