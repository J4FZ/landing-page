const goToByScroll = (id) => {
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'normal');
}


$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top * 1.1;// + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
      
       
      });
});
