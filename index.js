$("document").ready(function(){

	let numArray = [],
		calcArray = [];

	$("#add_button").click(function(){
		let num = $("#number_input").val(),
			sum;
		if(!calcArray.length){
			calcArray.push(num);
		}
		else{
			calcArray.push("+");
			calcArray.push(num);
		}
		if(numArray.length){
			let lastNum = numArray.pop();
			sum = parseInt(num) + parseInt(lastNum);
			numArray.push(sum);
		}
		else{
			numArray.push(parseInt(num));
		}
		$("#number_output").html(`<span>${calcArray.join(' ')}</span>`);
		$("#number_input").val("");
	});

	$("#equals_button").click(function(){
		$("#number_output").val("");
		$("#number_output").append(numArray[numArray.length - 1]);
		numArray = [];
		calcArray = [];
	});

});