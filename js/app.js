$(document).foundation()

$('[data-addCart]').click(function() {
    $(this).addClass('is-adding')
    setTimeout(function() {
    $('[data-addCart]').removeClass('is-adding')
    $('[data-successMessage]').removeClass('hide')
    }, 2500);
  });
  
// shows and hides filtered items
$(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.'+value).hide('3000');
      $('.filter-simple-item').filter('.'+value).show('3000');
    }
  });
  
  // changes active class on filter buttons
  $('.filter-simple-button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
  
// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      }
  });
  
  $('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
  })
       