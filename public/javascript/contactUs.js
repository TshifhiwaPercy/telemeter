var ltCount = 0;
var wordCountInterval;
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
		console.log(txtArea.innerText.length);
		wordCounter.innerHTML = ltCount+"/250";

	}
	catch(exception){
		console.log(exception);
	}

}
function clearTimer(){
	clearInterval(wordCountInterval);
}