$(document).ready(function() {
    $('.resume-button').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );
});

$(document).ready(function() {
  $('.contact-button').hover(
      function() {
          $(this).addClass('hovered');
      },
      function() {
          $(this).removeClass('hovered');
      }
  );
});

$(document).ready(function() {
    $('.projects-button').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );
});

$(document).ready(function(){
    $('.about, .work, .contact, .resume').hover(function(){
      $(this).css('text-decoration', 'underline');
      $(this).css('font-weight', 'bold');
    }, function(){
      $(this).css('text-decoration', 'none');
      $(this).css('font-weight', 'normal');
    });
  });
  

  $(document).ready(function() {
    $('.doi').hover(
      function() {
        $(this).addClass('hovered');
      },
      function() {
        $(this).removeClass('hovered');
      }
    );
  });

  $(document).ready(function() {
    $('.book-wagon').hover(
      function() {
        $(this).addClass('hovered');
      },
      function() {
        $(this).removeClass('hovered');
      }
    );
  });

  $(document).ready(function() {
    $('.flyle').hover(
      function() {
        $(this).addClass('hovered');
      },
      function() {
        $(this).removeClass('hovered');
      }
    );
  });

  $(document).ready(function() {
    $(window).on('load', function() {
      $('#loading-screen').fadeOut('slow', function() {
        $(this).remove(); 
      });
    });
  });

  $(document).ready(function(){
    $('#up-button').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
    });
});


$(document).ready(function(){
  $('.about-3, .work-4, .contact-5, .resume-6').hover(function(){
    $(this).css('text-decoration', 'underline');
    $(this).css('font-weight', 'bold');
  }, function(){
    $(this).css('text-decoration', 'none');
    $(this).css('font-weight', 'normal');
  });
});


$(document).ready(function() {
  $('.facebook').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
});

$(document).ready(function() {
  $('.linkedin').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
});

$(document).ready(function() {
  $('.google').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
});