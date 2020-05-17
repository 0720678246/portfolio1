let navbar=$(".navbar");

$(window).scroll( function () {
    let otop=$(".section-2").offset().top-window.innerHeight;
    if ($(window).scrollTop()>otop){
        navbar.addClass("sticky");


    } else {
        navbar.removeClass("sticky")

    }
    
});
let ncount=function (selector) {

  $(selector).each(function () {
      $(this).animate({
          Counter:$(this).text()
      },{
          duration:2000,
          easing:"swing",
          step:function (value) {
              $(this).text(Math.ceil(value));
              
          }
      });
      
  });
};

let a=0;
$(window).scroll(function () {
    let otop=$(".number").offset().top-window.innerHeight;
    if (a === 0&&$(window).scrollTop()>=otop){
        a++;
         ncount(".rect >h1");
    }



});