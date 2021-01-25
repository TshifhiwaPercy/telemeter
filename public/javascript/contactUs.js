var ltCount = 0;
var showForm = true;
var mobile = false; //Variable indicates whether user is using a mobile or pc
var ran = false; 
var wordCountInterval;
function pageLoad(){
	try{
		
		const width = window.innerWidth;
		const height = window.innerHeight;
		var main_container = document.getElementById("main_container");
		if(width >900){
			main_container.style.height = (height*0.8)+"px";
			mobile = false;
			showForm = false;
			showMore();
		}
		else{
			showForm = false;
			mobile = true;
			showMore();
		}

	}
	catch(exception)
	{
		console.log(exception);
	}
}
function showMore(){
	try{
		var form = document.getElementById("contact_form");
		var details = document.getElementById("general_Information");
			
		if(mobile){
			if(showForm){
				showForm = false;
				form.style.height = "0px";
				form.style.visibility="hidden";
				details.style.height = "auto";
				details.style.visibility="visible";
			}
			else{
				showForm = true;
				form.style.height = "auto";
				form.style.visibility = "visible";
				details.style.height = "0px";
				details.style.visibility = "hidden";
			}
		}
		else{
			form.style.height = "auto";
			form.style.visibility = "visible";
			details.style.height = "auto";
			details.style.visibility = "visible";
			details.style.bottom = "0";
		}


	}
	catch(exception){
		console.log(exception);
	}
}
function letterCount(){
	try{
		
		wordCountInterval = setInterval("countLetters()",100);
	}
	catch(exception){
		console.log(exception);
	}

}
function countLetters(){
	try{
		var txtArea= document.getElementById("txtArea");
		var wordCounter = document.getElementById("letter_count");
		
		if(ltCount==250){
			txtArea.readOnly = true;
		}
		else{
		ltCount = (txtArea.value).length;
		wordCounter.innerHTML = ltCount+"/250";

		}
		

	}
	catch(exception){
		console.log(exception);
	}

}
function clearTimer(){
	clearInterval(wordCountInterval);
}