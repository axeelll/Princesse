const head = document.getElementById('head')

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
function onWindowScroll(event) {
	if (window.pageYOffset < 46) {
  	head.classList.remove('scrolled')
  } else {
  	head.classList.add('scrolled')
  }
}

window.addEventListener('scroll', onWindowScroll)