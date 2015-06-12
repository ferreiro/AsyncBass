var box = $('.linkBoxes li'),
    width = $(window).width();
    
if (width >= 1000) {
  // TODO
}

/**
*   Making the boxes height, proportional to their width 
*/
$(window).resize(function () {
  box.css({'height': box.width() / 1.6});
}); 
  
