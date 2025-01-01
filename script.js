

var tl = gsap.timeline();

tl.from("#logo", {
    y:30,
    duration:0.4,
    delay:1,
    opacity:0,
})

tl.from("nav ul li",{
    y:30,
    opacity:0,
    // duration:1.8,
    stagger:0.4,
})

tl.from("h1",{
    y:30,
    opacity:0,
    scale:0.5,
    duration:1,
})
