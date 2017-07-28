/*console.log(document);
var fname=document.getElementById('txtFirstName');
console.log(fname);*/
// browser provide some area to exceute our code we called global scope/context
// global context is nothing but window object our file attacthec d to window object
// var iLikeJavaScript=true;//global var attached to  willndow

/*function move(){
		console.log(document);
		var fname=document.getElementById('txtFirstName');
		console.log(fname);
		var iLikeJavaScript=false;
		alert(iLikeJavaScript);
}
move();
alert(iLikeJavaScript);*/
//inside function data  will be local context,outside function global context
//global scope
//block level scope-let
function x(){
	var x=100;
	if(true)
	{
		let x=1000;
		//var inside if will move inside function to top
		//life time of x is inside if 
		//if we change it to var x value propagated to outside if
		console.log(x);//variable hoisting if we use let it wont move to top
	}
	console.log(x);
}
x();
//let is a keyword to create th eblock level scope  
//closure are func it will return another func

function bookTicket(movieName,location){

	return function (theater){

	//no need of confirmed func //annonymous func
		console.log("confirmned");
		console.log("seat no:a1");
		console.log("movie name:"+movieName);
		console.log("theater"+theater);
		
	}
}
var ticket1=bookTicket("rr","10:00");//outer function changes inn remains same
ticket1("1");
var ticket2=bookTicket("rrr","10:00");
ticket2("pvruyuyu");
//closure remmeber data/environment at time of its creation
//call backs