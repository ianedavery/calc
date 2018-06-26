$("document").ready(function(){

	let calcString = "";

	$("#add_button").click(function(){
		$("#number_input").val() === "" ? calcString += "0 + " : calcString += `${$("#number_input").val()} + `;
		$("#number_output").html(`<span>${calcString.substring(0, calcString.length - 2)}</span>`);
		$("#number_input").val("");
	});

	$("#subtract_button").click(function(){
		$("#number_input").val() === "" ? calcString += "0 - " : calcString += `${$("#number_input").val()} - `;
		$("#number_output").html(`<span>${calcString.substring(0, calcString.length - 2)}</span>`);
		$("#number_input").val("");
	});

	$("#equals_button").click(function(){
		$("#number_input").val() === "" ? calcString += "0" : calcString += $("#number_input").val();
		$("#number_output").html(`<span>${eval(calcString)}</span>`);
		$("#number_input").val("");
		calcString = "";
	});

});