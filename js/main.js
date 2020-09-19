
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf00d;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    

})(jQuery);

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

console.clear();

function pageTransition() {
	let tl = gsap.timeline({ ease: Expo.easeInOut });

	gsap.to("img", {
		duration: 0.4,
		opacity: 0,
	});

	tl.set(".transition-container span", { pointerEvents: "all" })
		.to("span#from-top", {
			duration: 0.4,
			transformOrigin: "top center",
			scaleY: 1,
			top: "0%",
			delay: 0.2,
		})
		.to(
			"span#from-bottom",
			{
				duration: 0.4,
				transformOrigin: "bottom center",
				scaleY: 1,
				delay: 0.2,
			},
			"-=0.6"
		);

	tl.to("span#from-top", {
		duration: 0.4,
		transformOrigin: "bottom center",
		scaleY: 0,
		delay: 0.6,
	})
		.to(
			"span#from-bottom",
			{
				duration: 0.4,
				transformOrigin: "top center",
				scaleY: 0,
				delay: 0.6,
			},
			"-=1"
		)

		.set(".transition-container span", { pointerEvents: "none" });
}

function fadeInContent() {
	let tl = gsap.timeline({ ease: Expo.easeInOut });
	tl.set(".transition-element", {
		top: "5%",
		opacity: 0,
	})
		

		.to(".transition-element", {
			duration: 0.4,
			top: "0%",
			opacity: 1,
			stagger: 0.1,
		})
		
}

function fadeOutContent() {
	let tl = gsap.timeline({ ease: Expo.easeInOut });
	tl.to(".transition-element", {
		duration: 0.4,
		top: "5%",
		opacity: 0,
		stagger: -0.1,
	})
}

barba.init({
	sync: true,

	transitions: [
		{
			async leave() {
				const done = this.async();
				pageTransition();
				fadeOutContent();
				await delay(1200);
				done();
			},
			async enter() {
				fadeInContent();
			},
			async once() {
				fadeInContent();
			},
		},
	],
});

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}
////////////////// cursor bw ///////////////////
// const cursor = document.querySelector('.cursor');
// 
// let mouseX = 0;
// let mouseY = 0;
// 
// let cursorX = 0;
// let cursorY = 0;
// 
// let speed = 0.5; // change to increase the ease
// 
// function animate() {
//     let distX = mouseX - cursorX;
//     let distY = mouseY - cursorY;
// 
//     cursorX = cursorX + (distX * speed);
//     cursorY = cursorY + (distY * speed);
// 
//     cursor.style.left = cursorX + 'px';
//     cursor.style.top = cursorY + 'px';
// 
//     requestAnimationFrame(animate);
// }
// 
// 
// animate();
// 
// document.addEventListener('mousemove', (event) => {
//     mouseX = event.pageX;
//     mouseY = event.pageY;
// })

/////////// cursor magnet ///////////

'use strict';

var follow = {
    page: {
        x: window.innerWidth,
        y: window.innerHeight,
        middle: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
    },
    mouse: {
        x: 0,
        y: 0
    },
    rotate: {
        angle: 10,
        x: function() { 
            return -( follow.page.middle.x - follow.mouse.x ) / follow.page.x * follow.rotate.angle 
        },
        y: function() { 
            return ( follow.page.middle.y - follow.mouse.y ) / follow.page.y * follow.rotate.angle 
        }
    },
    do: function( target, angle ) {
        if( angle != undefined )
            follow.rotate.angle = angle;
        
        document.querySelector( target ).style.transform = 'perspective( 200px ) rotateX( ' + follow.rotate.y() + 'deg ) rotateY( ' + follow.rotate.x() + 'deg )';
    },
    init: function( target, angle ) {
        window.addEventListener( 'mousemove', function( e ) {
            follow.mouse.x = e.pageX;
            follow.mouse.y = e.pageY;

            follow.do( target, angle );
        } );
    }
};

follow.init( '.title', 5 );
follow.init( '.back', .5 );

$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      $(".title-index").css({"background-position": traX + "%" + traY + "%"});
    });
  });
  
