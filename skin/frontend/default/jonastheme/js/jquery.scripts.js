jQuery.noConflict();
jQuery(document).ready(function (){
    var headerTop = jQuery('.header-container').outerHeight();
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 0){
            jQuery('.header-container').addClass("sticky");
            jQuery('.main-container').css("paddingTop",headerTop)
        }
        else{
            jQuery('.header-container').removeClass("sticky");
            jQuery('.main-container').css("paddingTop","0")
        }
    });
});
