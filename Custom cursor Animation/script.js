var cursor = document.querySelector("#cursor");
var webPage = document.querySelector("#main");
var img = document.querySelector("#overlay");

webPage.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        duration: 0.8,
        ease: "back.out",
    })
})

img.addEventListener("mousemove", function () {
    cursor.innerHTML = `<i class="ri-arrow-right-line"></i>`;
    gsap.to("#cursor", {
        scale: 2,
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        boxShadow: "none",
        duration: 0.6,
    })
})

img.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to("#cursor", {
        scale: 1,
        boxShadow: "0px 0px 40px 10px rgba(172, 255, 47, 0.446)",
        backgroundColor: "greenyellow",
        duration: 0.6,
    })
})
 
