gsap.from("#content-bottom .cd1-img", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#content-bottom .cd1-img",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 40%",
        scrub: 2
    }
})

$(document).ready(function(){
    $("#cd1-img2, #cd1-img3").css({
        "height" : "190px",
        "width" : "220px"
    })

    $("#cd1-img2").css({
        "margin-top" : "48px"
    })

    $("#cd1-img3").css({
        "margin-left" : "54px"
    })
})