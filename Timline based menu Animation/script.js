var menuBtn = document.querySelector("#nav1 i");
var backBtn = document.querySelector("#back-btn");
var tl = gsap.timeline();
tl.to("#nav2", {
    left: "0%",
    duration: 0.5,
    ease: "power.in"
})
tl.from("#nav2 h1", {
    x: -100,
    duration: 0.5,
    stagger: 0.3,
    opacity: "0",
    ease: "power.in",
})

tl.from("#back-btn", {
    opacity: "0",
    duration: 0.5,
    ease: "power.in",
})
tl.pause();

menuBtn.addEventListener("click", function () {
    tl.play();
});

backBtn.addEventListener("click", function () {
    tl.reverse();
})