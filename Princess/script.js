// var head = document.getElementById('head')

// // J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// // le scoll n'est pas forcément en haut au chargement.
// function onWindowScroll(event) {
// 	if (window.pageYOffset < 46) {
//   	head.style.color = "red" ;
//   } else {
//   	head.style.color = "none";
//   }
// }
// document.body.scrollTop > 50



window.onscroll = function(){
	scrolling()
};



function scrolling() {

	// if (window.pageYOffset < 1000) {

	// 	document.getElementById("head").className = "head";
	// 	document.getElementById("head").style.opacity = "1";
	// }

	if (window.pageYOffset > 200) {
		// document.getElementById("header").className = "head_scroll"
		//document.getElementById("header").style.opacity = "0.8";
	}

	if (window.pageYOffset > 900) {
		document.getElementById("head").className = "head_scroll"
		document.getElementById("head").style.opacity = "0.8";
	}

	else {
		document.getElementById("head").className = "head";
		document.getElementById("head").style.opacity = "1";
	}
}

// function scroll() {
// 	var head = document.getElementById('header');
// 	head.style.color = "red";
// }




		function function_burger() {
			var menu = document.getElementById("burger");
				 
			if (menu.style.transform == "translateX(0%)") {
				menu.style.transform = "translateX(100%)";
			}
			else {
				menu.style.transform = "translateX(0%)";
		 	}
		 }
		
// monmenu.style.visibility = (monmenu.style.visibility =="hidden")
// 		 					?"initial" : "hidden";





