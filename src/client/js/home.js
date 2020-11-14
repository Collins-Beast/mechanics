//Home javascript
$(document).ready(function(e){
	$('#logout').on('click', function(e){
		e.preventDefault();
		window.token = '';
		window.location.href = 'http://localhost:8080/';
	});
});