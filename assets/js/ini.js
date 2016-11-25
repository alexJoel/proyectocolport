$(document).ready(function(){
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd'
    });	
})
$(document).ready(function() {
		// Create two variable with the names of the months and days in an array
		var monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		var dayNames= ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

		// Create a newDate() object
		var newDate = new Date();
		// Extract the current date from Date object
		newDate.setDate(newDate.getDate());
		// Output the day, date, month and year
		$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

		setInterval( function() {
			// Create a newDate() object and extract the seconds of the current time on the visitor's
			var seconds = new Date().getSeconds();
			// Add a leading zero to seconds value
			$("#sec").html((seconds < 10 ? "0" : "") + seconds);
			$("#segundo").html((seconds < 10 ? "0" : "") + seconds);
			},1000);

		setInterval( function() {
			// Create a newDate() object and extract the minutes of the current time on the visitor's
			var minutes = new Date().getMinutes();
			// Add a leading zero to the minutes value
			$("#min").html((minutes < 10 ? "0" : "") + minutes);
			$("#minuto").html((minutes < 10 ? "0" : "") + minutes);
			$("#minuto2").html((minutes < 10 ? "0" : "") + minutes);
		    },1000);

		setInterval( function() {
			// Create a newDate() object and extract the hours of the current time on the visitor's
			var hours = new Date().getHours();
			// Add a leading zero to the hours value
			$("#hours").html((hours < 10 ? "0" : "") + hours);
			$("#hora").html((hours < 10 ? "0" : "") + hours);
			$("#hora2").html((hours < 10 ? "0" : "") + hours);
		    }, 1000);
		});
