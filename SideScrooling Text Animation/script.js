gsap.to("#page2 h3",{
    transform:"translateX(-320%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end: "top -320%",
        scrub:2,
        pin:true
    }
})