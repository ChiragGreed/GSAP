var tl = gsap.timeline();
var tl2 = gsap.timeline();
tl.to("#marquee i", {
    rotate: "180deg",
    duration: 0.5,
})
tl.pause();

tl2.to("#marquee-content", {
    transform: "translateX(-100%)",
    duration: 20,
    ease: "none",
    repeat: -1,
})

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        tl.play();
        tl2.play();
    }
    else {
        tl.reverse();
        tl2.reverse();

    }
})