function pg1_animation() {
    var navbtns = document.querySelector("#nav-btns button");
    var tl = gsap.timeline();

    tl.from("#brand ,#nav-btns button", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        stagger: {
            each: 0.02,
            from: "center",
        },
        ease: "back.out"
    });

    tl.from("#info h1, #info p,#info button", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4,
        ease: "back.out"
    })

    tl.from("#img1", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out"
    }, "-=1.6")


    tl.from("#page-1-footer img", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: {
            each: 0.07,
            from: "center",
        },
        ease: "back.out"
    }, "-=0.6")
}

function pg2_animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page-2",
            scroller: "body",
            start: "top 90%",
            end: "top -40%",
            scrub: 2,
        }
    });

    tl.from("#about-services-div p:nth-child(1)", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",

    })

    tl.from("#about-services-div p:nth-child(2)", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
    }, "-=0.6")


    tl.from("#services-div-1 .service:nth-child(1)", {
        x: -30,
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
    })

    tl.from("#services-div-1 .service:nth-child(2)", {
        x: 30,
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
    }, "-=0.4")

    tl.from("#services-div-2 .service:nth-child(1)", {
        x: -30,
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
    }, "-=0.4")

    tl.from("#services-div-2 .service:nth-child(2)", {
        x: 30,
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
    }, "-=0.4")

}

pg1_animation();
pg2_animation();