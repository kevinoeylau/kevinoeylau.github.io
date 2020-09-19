// JavaScript Document

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        xfbml: true,
        version: 'v3.3'
    });
};


window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));


jQuery('.skillbar').each(function() {
    jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
    }, 2000);
});

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();

  function hoverAnimation() {
    var menuItemsShape = $(".js-shape"),
      linksWrapper = $(".js-menu-items-wrapper"),
      linksItems = $(".js-menu-item"),
      activeItem = $(".js-menu-item.is-active"),
      activeItemPosition = activeItem.position().top,
      menuItemsShapePath = $(".js-items-shape-path"),
        info = $(".js-info");
  
    TweenMax.set(menuItemsShape, {
      y: activeItemPosition
    });
  
    linksItems.on({
      mouseenter: function() {
        _self = $(this);
        var selfParent = _self.closest(linksWrapper),
          targetCircle = selfParent.find(menuItemsShape),
          circlePosition;
  
        if ($(window).width() < 800) {
          circlePosition = _self.position().top;
          TweenMax.to(targetCircle, 0.6, {
            y: circlePosition,
            ease: Power2.easeOut
          });
        } else {
          circlePosition = _self.position().left;
          TweenMax.to(targetCircle, 0.6, {
            x: circlePosition,
            ease: Power2.easeOut
          });
        }
  
        TweenMax.to(menuItemsShapePath, 1, { morphSVG: this.dataset.morph });
      }
    });
  
    linksWrapper.on({
      mouseleave: function() {
        _self = $(this);
        var selfParent = _self.closest(linksWrapper),
          activeLink = selfParent.find(activeItem),
          targetCircle = selfParent.find(menuItemsShape),
          activeLinkPosition = activeLink.position().top;
  
              if ($(window).width() < 800) {
         TweenMax.to(targetCircle, 0.6, {
          y: activeLinkPosition,
          ease: Power2.easeOut
        });
        } else {
         TweenMax.to(targetCircle, 0.6, {
          x: activeLinkPosition - 32,
          ease: Power2.easeOut
        });
        }
  
        TweenMax.to(menuItemsShapePath, 1, { morphSVG: menuItemsShapePath });
      }
    });
    
    $(window).resize(function() {
      info.show();
    });
  }
  
  hoverAnimation();
  