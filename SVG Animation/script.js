let initial_path=`M 100 100 Q 715 100 1436 100`;

let final_path=`M 100 100 Q 715 300 1436 100`;

var string = document.querySelector('#string');

string.addEventListener("mousemove",function(cord){
    var ycord = cord.offsetY;
    var xcord = cord.offsetX;
    final_path=`M 100 100 Q ${xcord} ${ycord} 1436 100`;
    gsap.to("svg path",{
        attr:{d:final_path},
        duration:0.5
    })
});

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:initial_path},
        ease: "elastic.out(1,0.1)",
        duration:1.5,
    })
});



