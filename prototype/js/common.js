function init() {
    window.addEventListener('scroll', function(){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 70;
        if (distanceY > shrinkOn) {
            $("header").addClass("small fixed");
            $(".entry-title").addClass("small");
        } else {
            if ( $("header").hasClass("small fixed") ) {
                $("header").removeClass("small fixed");
                $(".entry-title").removeClass("small");
            }
        }
    });
}
window.onload = init();