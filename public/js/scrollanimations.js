$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel
    .from(".parallax:nth-child(1)", 1500, {yPercent: 0, delay: 2})
    .to(".parallax:nth-child(2)", 1500, {yPercent: -100, delay: 2})
    // animate to third panel
    .to(".parallax:nth-child(3)", 1500, {yPercent: -200, delay: 2});

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: ".whatwedo",
      triggerHook: "onLeave",
      duration: "400%"
    })
    .setPin(".whatwedo")
    .setTween(wipeAnimation)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
