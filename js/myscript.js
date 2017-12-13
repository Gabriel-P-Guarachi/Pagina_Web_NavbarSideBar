//Llamado tooltip
$(document).ready(function(){
	$('.mytool').tooltip();
});

$('.hamburger').on('click', function () {
	// busca id y le decimos que agregue o quite
	$('#wrapper').toggleClass('toggled');
});