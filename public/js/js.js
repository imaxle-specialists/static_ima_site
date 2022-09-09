// eslint-disable-next-line no-shadow-restricted-names

( function( $, window, document, undefined ) { // This limits variable scope, stopping them staying in the global scope and taking up memory
  'use strict'; // Disallows undefined variables

  var $document = $( document ),
  $window = $( window ),
  rootURL = ( window.rootURL || '' );

  // DOM is ready, but not necessarily iframes and images etc
  $document.ready( function() {

    $(".nav li a, .readmore").on( "click", function( e ) {
      e.preventDefault();
      var id = $( this ).attr( "data-id" );

      $( "html, body" ).animate({
        scrollTop: $("[data-section="+id+"]").offset().top
      }, 1000);
    });

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
  
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
  
      return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
    if ($('.statisticssection').isInViewport()) {
      count();
    }
  });

    $( "section" ).each( function() {
      var $this = $(this);

    //   new Waypoint.Inview({
    //     element: this,
    //     enter: function(direction) {
    //        console.log(this.element.id + ' enter');
    //     },
    //     entered: function(direction) {
    //        console.log(this.element.id + ' entered');
    //     },
    //     exit: function(direction) {
    //        console.log(this.element.id + ' exit');
    //     },
    //     exited: function(direction) {
    //        console.log(this.element.id + ' exited');
    //     }
    //  });

      $this.waypoint({
        handler: function(direction) {

          if( direction == "down" ) {
            $this.addClass( "visible" );
          }

        },
        offset: '100%'
      });

      $this.waypoint({
        handler: function(direction) {

          if( direction == "up" ) {
            $this.removeClass( "visible" );
          }

        },
        offset: '0%'
      });

      /*
      $this.waypoint({
        handler: function(direction) {
          $this.removeClass( "visible" );
          // console.log($(this));
          // count();
        },
        offset: '-10%'
      });

      $this.waypoint({
        handler: function(direction) {
          $this.removeClass( "visible" );
          // console.log($(this));
          // count();
        },
        offset: '110%'
      });
      */

    });
    
    // Mobile nav responsive menu
    $( ".nav-icon" ).on( "click", function() {
      if( $( this ).parent().parent().parent().hasClass( "open" ) ) {
        $( ".header-wrap" ).removeClass( "open" );
        $( ".mobile-nav" ).slideUp( 200 );
      }
      else {
        $( ".header-wrap" ).addClass( "open" );
        $( ".mobile-nav" ).slideDown( 200 );
      }
      return true;
    });

    $(".mobile-nav li a").on( "click", function( e ) {
      e.preventDefault();
      var id = $( this ).attr( "data-id" );
      $( ".mobile-nav" ).fadeOut( 200 );
      $( ".header-wrap" ).removeClass( "open" );

      $( "html, body" ).animate({
        scrollTop: $("[data-section="+id+"]").offset().top
      }, 1000);
    });
    // End: Mobile nav responsive menu

    // Scrolling header
    var position = $( window ).scrollTop();

    $( window ).on( 'scroll', function( e ) {
      e.stopPropagation();
      var scroll = $( window ).scrollTop();
      var header = $( ".header-wrap" );
      var bannerHeight = $( ".introbanner" ).height();

      if ( $( document ).scrollTop() > 200 ) {
        header.addClass( "scrolled" );
      }
      else {
        header.removeClass( "scrolled" );
      }

      if ( scroll > position ) {
        // scroll down
        if ( $( document ).scrollTop() > bannerHeight ) {
          $( ".header-wrap" ).removeClass( "is-visible" );
        }
      }
      else {
        // scroll up
        if ( $( document ).scrollTop() < bannerHeight ) {
          $( ".header-wrap" ).removeClass( "is-visible" );
        }
        else {
          $( ".header-wrap" ).addClass( "is-visible" );
        }
      }

      position = scroll;
      // count();
    });
    // End: Scrolling header

    var Webflow = Webflow || [];
    Webflow.push(function() {
      window.addEventListener('resize', function() {
          window.Webflow.require("lottie").lottie.resize();
      });	
    }); 

    function count() {
      $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
      
        });  
        
        
      });
    }

  } );

  // Whole page is ready, including DOM, iframes and images etc
  $window.load( function() {

  } );

} )( jQuery, window, document );
