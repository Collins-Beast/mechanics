//Home javascript
$(document).ready(function(e){
	$('#logout').on('click', function(e){
		e.preventDefault();
		window.token = '';
		window.location.href = "http://127.0.0.1:8080/";
	});
});