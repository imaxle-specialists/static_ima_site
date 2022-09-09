( function( $, window, document, undefined ) { // This limits variable scope, stopping them staying in the global scope and taking up memory
  'use strict'; // Disallows undefined variables

  var $document = $( document ),
  $window = $( window ),
  rootURL = ( window.rootURL || '' );

  // DOM is ready, but not necessarily iframes and images etc
  $document.ready( function() {
    var headerAnimation = lottie.loadAnimation({
      container: document.getElementById( "logoanimation" ), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/ima-logo-build.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });

    var footerAnimation = lottie.loadAnimation({
      container: document.getElementById( "footeranimation" ), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "images/ima-logo-build.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });

    var icon1Animation = lottie.loadAnimation({
      container: document.getElementById( "iconcontainer1" ), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/ima-icon-1.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });

    var icon2Animation = lottie.loadAnimation({
      container: document.getElementById( "iconcontainer2" ), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/ima-icon-2.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });

    var icon3Animation = lottie.loadAnimation({
      container: document.getElementById( "iconcontainer3" ), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/ima-icon-3.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  
    const headerViewport = function() {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
  
      let observer = new IntersectionObserver(function(entries, observer) {
        entries[0].isIntersecting === true ? headerAnimation.play() : headerAnimation.goToAndStop(0, 0);
      }, options);
  
      observer.observe(document.querySelector('.header-wrap'));
    }

    const footerViewport = function() {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
  
      let observer = new IntersectionObserver(function(entries, observer) {
        entries[0].isIntersecting === true ? footerAnimation.play() : footerAnimation.goToAndStop(0, 0);
      }, options);
  
      observer.observe(document.querySelector('.footer-wrap'));
    }

    const icon1AnimationViewport = function() {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
  
      let observer = new IntersectionObserver(function(entries, observer) {
        entries[0].isIntersecting === true ? icon1Animation.play() : icon1Animation.goToAndStop(0, 0);
      }, options);
  
      observer.observe(document.querySelector('.icon1'));
    }

    const icon2AnimationViewport = function() {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
  
      let observer = new IntersectionObserver(function(entries, observer) {
        entries[0].isIntersecting === true ? icon2Animation.play() : icon2Animation.goToAndStop(0, 0);
      }, options);
  
      observer.observe(document.querySelector('.icon2'));
    }

    const icon3AnimationViewport = function() {
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
  
      let observer = new IntersectionObserver(function(entries, observer) {
        entries[0].isIntersecting === true ? icon3Animation.play() : icon3Animation.goToAndStop(0, 0);
      }, options);
  
      observer.observe(document.querySelector('.icon3'));
    }
  
    // on window load
    window.onload = function() {
      headerViewport();
      footerViewport();
      icon1AnimationViewport();
      icon2AnimationViewport();
      icon3AnimationViewport();
    }
    
    
  } );

  // Whole page is ready, including DOM, iframes and images etc
  $window.load( function() {

  

  } );

} )( jQuery, window, document );