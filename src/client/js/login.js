$(document).ready(function(){
	$('#login').on('submit', function(event){
		event.preventDefault();
		let user = {
			phone: $('#phone').val(),
			password: $('#password').val()
		};
		let url = 'http://localhost:8080/api/login';
		$.post(url, user,function(data, status) {
			console.log(data.code + ' : ' + status);
			if(data.code === 204) {
				return $('#info').html('Wrong phone or password');
			}
			if(data.code === 206) {
				return $('#info').html('phone does not exist');
			}
			if(data.code === 200) {
				window.token = data.token;
				return window.location.href = 'http://127.0.0.1:8080/home?token=' + window.token;
			}
			if(data.code === 400){
				return $('#info').html('Something went wrong. Please try again!');
			}
		}).catch(err => {
			console.log(err.message);
			return $('#info').html('Something went wrong, please try again. Are you connected?');
		});
	});
});