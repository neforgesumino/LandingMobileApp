$(document).ready(function() {
    // slides array
    const slides = document.getElementsByClassName("slides");
    // total no. slides
    const total_slides = slides.length;
    // slides counter 
    var counter = 0;

    function slider_func() {
        // Repeat the loop after every given time interval
        setTimeout(slider_func, 3000);
        // hide all slides
        var j = 0;
        while (j < total_slides) {
          $(slides[j]).css("display", "none");
          j++;
        }

        // show a slide and animate
        $(slides[counter])
        .css("display", "block")
        .css("animation", "popin 2s");
        counter++;


        // reset counter
        if (counter >= total_slides) {
          counter = 0;
         }
    }
        slider_func();
});