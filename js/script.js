

// Get the element with id="defaultOpen" and click on it
//document.getElementsByClassName("defaultOpen")[0].click();


//hideContent()
//document.getElementById('Los Gatos Hills, CA').style.display = "block";
//document.getElementById('Los Gatos Hills, CA').className += " active";

var slideIndex = 1;
showSlides(slideIndex, 'mySlides');
hideContent() 
document.getElementById('Palo Alto, CA').style.display = "block";
document.getElementById('Palo Alto, CA').className += " active";

//PALOALTO
document.getElementById('paloAlto').onclick = function(){
  showSlides(slideIndex=1, 'mySlides')
  
  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById('Palo Alto, CA').style.display = "block";
  document.getElementById('Palo Alto, CA').className += " active";
}

//LOSGATOS
document.getElementById('losGatos').onclick = function(){
  showSlides(slideIndex=1, 'mySlides2')

  hideContent()

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById('Los Gatos Hills, CA').style.display = "block";
  document.getElementById('Los Gatos Hills, CA').className += " active";
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

// Next/previous controls
function plusSlides(n, slideType) {
  showSlides(slideIndex += n, slideType);
}

// Thumbnail image controls
function currentSlide(n, slideType) {
  showSlides(slideIndex = n, slideType);
}

function showSlides(n, slideType) {
  var i;
  var slides = document.getElementsByClassName(slideType);
  var dots = document.getElementsByClassName("demo");
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