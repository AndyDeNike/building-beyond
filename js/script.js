//initial script run when document is accessed 

window.onload=function(){
  document.getElementById('paloAlto').click();
};

//PALOALTO
document.getElementById('paloAlto').onclick = function(){
  currentSlide(slideIndex=1, 'paloAltoSlides', 'cursor1')
  
  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  currentTab('Palo Alto, CA')

  document.getElementById('pa1thumb').onclick = function(){
    currentSlide(1, 'paloAltoSlides', 'cursor1')
  }
  document.getElementById('pa2thumb').onclick = function(){
    currentSlide(2, 'paloAltoSlides', 'cursor1')
  }
  document.getElementById('pa3thumb').onclick = function(){
    currentSlide(3, 'paloAltoSlides', 'cursor1')
  }

  document.getElementById('paPrev').onclick = function(){
    plusSlides(-1, 'paloAltoSlides', 'cursor1')
  }
  document.getElementById('paNext').onclick = function(){
    plusSlides(1, 'paloAltoSlides', 'cursor1')
  }

}

//LOSGATOS
document.getElementById('losGatos').onclick = function(){
  currentSlide(slideIndex=1, 'losGatosSlides', 'cursor2')

  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  currentTab('Los Gatos Hills, CA')

  document.getElementById('lg1thumb').onclick = function(){
    currentSlide(1, 'losGatosSlides', 'cursor2')
  }
  document.getElementById('lg2thumb').onclick = function(){
    currentSlide(2, 'losGatosSlides', 'cursor2')
  }
  document.getElementById('lg3thumb').onclick = function(){
    currentSlide(3, 'losGatosSlides', 'cursor2')
  }

  document.getElementById('lgPrev').onclick = function(){
    plusSlides(-1, 'losGatosSlides', 'cursor2')
  }
  document.getElementById('lgNext').onclick = function(){
    plusSlides(1, 'losGatosSlides', 'cursor2')
  }

  //var dots = document.getElementsByClassName('demo cursor2');
  //for (i = 0; i < dots.length; i++) {
    //dots[i].onclick = function(){
      //currentSlide(i+1, 'LGSlides', 'demo cursor2')
    //}
  //}
}





function hideContent(){
  //Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
}

function currentTab(cityName) {
  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName).className += " active";
}

// Next/previous controls
function plusSlides(n, slideType, thumbType) {
  showSlides(slideIndex += n, slideType, thumbType);
}

// Thumbnail image controls
function currentSlide(n, slideType, thumbType) {
  showSlides(slideIndex = n, slideType, thumbType);
}                         

function showSlides(n, slideType, thumbType) {
  var i;                          
  var slides = document.getElementsByClassName(slideType);
  var dots = document.getElementsByClassName(thumbType);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");

  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 