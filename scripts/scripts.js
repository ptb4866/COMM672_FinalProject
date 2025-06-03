$(document).ready(function() {
   
    //Post Dispears when it reaches footer on phone screens
    $(window).scroll(function(){
          
        if ($(this).scrollTop() < 4100) {
            $('#mobile-post-btn').fadeIn();
        } else {
            $('#mobile-post-btn').fadeOut();
        }
    })
})

