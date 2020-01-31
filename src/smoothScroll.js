import $ from "jquery";
import jQuery from "jquery";

export const smoothScroll = () =>{
    $(document).ready(function(){
        jQuery.scrollSpeed();
    });
    
    (function($) { jQuery.scrollSpeed = function() {
    var $document = $(document),
        $window = $(window),
        $body = $('html, body'),
        root = 0,
        scroll = false,
        scrollY,
        view;
        
    if (window.navigator.msPointerEnabled)return false;     
    $window.on('DOMMouseScroll', function(e) {
        e.preventDefault()
        var deltaY = e.originalEvent.wheelDeltaY,
            detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scroll = true;  
        if (scrollY) {     
            view = $window.height();      
            if (deltaY < 0 || detail > 0)
                root = (root + view) >= $document.height() ? root : root += 200;
            if (deltaY > 0 || detail < 0)
                root = root <= 0 ? 0 : root -= 120;
                $body.stop().animate({
                    scrollTop: root   
                }, 1000, 'default', function() {     
                    scroll = false;
                });
            }     
            return false;     
            }).on('scroll', function(e) {    
                e.preventDefault()
                if (scrollY && !scroll) root = $window.scrollTop();
                
            }).on('resize', function(e) {   
                if (scrollY && !scroll) view = $window.height();    
            });       
        };
        jQuery.easing.default = function (x,t,b,c,d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        };
    })(jQuery);
}
