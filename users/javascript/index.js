var menuOpen= false; //Variable used to indicate whether the top menu bar is open or not
function showMenu(){
	try{

	}
	catch(exception){
		console.log(exception);
	}
}
function pageLoaded(){
	try{
	}
	catch(exception){
		console.log(exception);
	}
}
function openMenu(){
	try{
		var navMenu = document.getElementById("navMenu");
		var menuIcon = document.getElementById("menu_opener");
		var menuLink = document.getElementById("menu_opener_link");
		
		if(menuOpen){
			
			navMenu.style.marginTop="-85px";
			menuOpen = false;
			menuIcon.className="bi-list";
	
			

		}
		else{
		
			navMenu.style.marginTop = "0";
			menuOpen = true;
			menuIcon.style.transform="skew(20deg, -30deg)";
			menuIcon.style.transition="transform 10s ease-in";
			menuIcon.className = "bi-x";
		}
		navMenu.style.transition = "margin-top 1s ease-in-out";
	

	}
	catch(exception){
		console.log(exception);
	}
}
