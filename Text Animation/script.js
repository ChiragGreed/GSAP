var animate_btn = document.querySelector("button");
animate_btn.addEventListener("click",function animation(){
    txtsplit = function (obj) {
    var objtxt = obj.textContent;
    
    var splitter = objtxt.split("");
    var span = "";
    
    splitter.forEach(function (elem) {
        span += `<span>${elem}</span>`
    })
    obj.innerHTML = span;
}
var h1 = document.querySelector("h1");
txtsplit(h1);
gsap.from("h1 span", {
    display: "inline-block",
    y: 70,
    opacity: 0,
    duration: 1,
    ease:"back(2).out",    
    stagger:{
        each:0.03,
        from:"edges",
    }

})
});
