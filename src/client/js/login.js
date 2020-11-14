const { json } = require('body-parser');

$(document).ready(function(){
	$('#login').on('submit', function(event){
		event.preventDefault();
		let user = {
			phone: $('#phone').val(),
			password: $('#password').val()
		};
		$.post({
			url: 'localhost:8080/api/login',
			contentType: 'application/json',
			dataType: json,
			data: user
		}).then(res => {
			if(res.code === 204) {
				return $('#info').html('Wrong email or password');
			}
			if(res.code === 206) {
				return $('#info').html('Email does not exist');
			}
			if(res.code === 200) {
				window.token = res.data.token;
				return $.post({url:'localhost:8080/home', data: {token: window.token}, contentType: 'application/json'});
			}
			$('#info').html('Something went wrong. Please try again!');
		}).catch(err => {
			console.log(err.message);
			return $('#info').html('Something went wrong, please try again. Are you connected?');
		});
	});
});