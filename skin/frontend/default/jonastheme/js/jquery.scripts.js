jQuery.noConflict();
jQuery(document).ready(function (){
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1){
            jQuery('.header-container').addClass("sticky");
        }
        else{
            jQuery('.header-container').removeClass("sticky");
        }
    });
});
