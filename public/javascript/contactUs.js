var ltCount = 0;
var wordCountInterval;
function pageLoad(){
	try{
		const width = window.innerWidth;
		const height = window.innerHeight;
		var main_container = document.getElementById("main_container");
		if(width >900){
			main_container.style.height = (height*0.8)+"px";
		}

	}
	catch(exception)
	{
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