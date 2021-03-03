//Home javascript
$(document).ready(function(e){

	let url = window.location.href
	let token = url.split('?')[1].split('=')[1]
	sessionStorage.setItem('token', token)
	$('#logout').on('click', function(e){
		e.preventDefault();
		window.token = '';
		window.location.href = 'http://localhost:8080/';
	});
});