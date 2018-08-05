//initial script run when document is accessed 

window.onload=function(){
  document.getElementById('paloAltoTab').click();
};

//PALOALTO
document.getElementById('paloAltoTab').onclick = function(){
  currentSlide(slideIndex=1, 'paloAltoSlides', 'cursor1')
  
  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  currentTab('Palo Alto, CA', 'paloAltoTab')

  document.getElementById('pa1thumb').onclick = function(){
    currentSlide(1, 'paloAltoSlides', 'cursor3')
  }
  document.getElementById('pa2thumb').onclick = function(){
    currentSlide(2, 'paloAltoSlides', 'cursor3')
  }
  document.getElementById('pa3thumb').onclick = function(){
    currentSlide(3, 'paloAltoSlides', 'cursor3')
  }

  document.getElementById('paPrev').onclick = function(){
    plusSlides(-1, 'paloAltoSlides', 'cursor3')
  }
  document.getElementById('paNext').onclick = function(){
    plusSlides(1, 'paloAltoSlides', 'cursor3')
  }

}

//LOSGATOS
document.getElementById('losGatosTab').onclick = function(){
  currentSlide(slideIndex=1, 'losGatosSlides', 'cursor2')

  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  currentTab('Los Gatos Hills, CA', 'losGatosTab')

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

//PALOALTO2
document.getElementById('paloAlto2Tab').onclick = function(){
  currentSlide(slideIndex=1, 'paloAlto2Slides', 'cursor3')
  
  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  currentTab('Palo Alto, CA 2', 'paloAlto2Tab')

  document.getElementById('pa2thumb3').onclick = function(){
    currentSlide(1, 'paloAlto2Slides', 'cursor3')
  }
  document.getElementById('pa2thumb2').onclick = function(){
    currentSlide(2, 'paloAlto2Slides', 'cursor3')
  }
  document.getElementById('pa2thumb3').onclick = function(){
    currentSlide(3, 'paloAlto2Slides', 'cursor3')
  }

  document.getElementById('pa2Prev').onclick = function(){
    plusSlides(-1, 'paloAlto2Slides', 'cursor3')
  }
  document.getElementById('pa2Next').onclick = function(){
    plusSlides(1, 'paloAlto2Slides', 'cursor3')
  }

}


//-------------------------FUNCTIONALITY-------------------------


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

function currentTab(cityName, tabName) {
  document.getElementById(cityName).style.display = "block";
  //document.getElementById(cityName).className += " active";

  // Sets clicked tab to active allowing for css background active color
  document.getElementById(tabName).className += " active";
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