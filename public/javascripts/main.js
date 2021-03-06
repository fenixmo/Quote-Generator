$(document).ready(function(){

  carouselFiller();

});

function carouselFiller() {
  $.getJSON("quotes.json", function(data){
    var quoteData = '';
    $.each(data,function (key, value) {
      quoteData += '<div class="quote-item" style="display:none;">';
      quoteData += '<p>' + value.quote + '</p>'
      quoteData += '<p>' + value.author + '</p>'
      quoteData += '</div>'
    })
    $('#quotes').append(quoteData)
  });
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("quote-item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
