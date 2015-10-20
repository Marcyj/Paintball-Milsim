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
		console.log('sm');
		img.setAttribute("src", "img/title-mobile.png");
		btnNewsLetter.style.marginTop = "10px";
		btnNewsLetter.style.paddingLeft = "0px";
		btnNewsLetter.style.paddingRight = "0px";
	} else if (md.matches) {
		console.log('md');
		img.setAttribute("src", "img/litle-title.png");
		document.getElementById("btn-newsletter").style = "padding : 0px; margin-top: 10px;"
		btnNewsLetter.style.marginTop = "10px";
		btnNewsLetter.style.paddingLeft = "0px";
		btnNewsLetter.style.paddingRight = "0px";
	} else if (lg.matches) {
		console.log('LG');
		img.setAttribute("src", "img/Titre.png");
		// document.getElementById("btn-newsletter").style = "margin: 0px !important;"
		btnNewsLetter.style.marginTop = "0px";
		btnNewsLetter.style.paddingLeft = "15px";
		btnNewsLetter.style.paddingRight = "15px";
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