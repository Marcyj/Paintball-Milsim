$(document).ready(function() {
	updateImageSize();
	$(window).resize(function() {
        updateImageSize();
    });

});

function updateImageSize() {
	var img = document.getElementById('title');
	var btnNewsLetter = document.getElementById('btn-newsletter');
	var sm  = window.matchMedia( "(max-width: 768px)");
	var md  = window.matchMedia( "(max-width: 1199px)");
	var lg  = window.matchMedia( "(min-width: 1200px)");

	if (sm.matches) {
		img.setAttribute("src", "img/title-mobile.png");
	} else if (md.matches) {
		img.setAttribute("src", "img/litle-title.png");
		console.log("test");
		document.getElementById("btn-newsletter").style = "padding : 0px !important; margin-top: 10px;"
		btnNewsLetter.style.paddingRight = "0px !important;"
	} else if (lg.matches) {
		img.setAttribute("src", "img/Titre.png");
		document.getElementById("btn-newsletter").style = "margin-top: 0px"
	}
}

function checkMail(email) {
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(email.value)) {
      surligne(email, true);
      return false;
   } else {
      surligne(email, false);
      return true;
   }
}