$(function(){

    //back-to-top button
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if (scrolling > 100){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }

        if (scrolling > 50){
            $('.nav').addClass("bg");
        }
        else {
            $('.nav').removeClass("bg");
        }

    });

    //animation scroll js
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 60
                 }, 1500);
                 return false;
            }
         }
    });
    //preloder
    $(window).on('load',function(){
        $('.preloder').delay(500).fadeOut(500);
    });

    //lightbox
    $('.venobox').venobox(); 

    //countdown
    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        let birthday = "Feb 14, 2022 00:00:00",
            countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              let now = new Date().getTime(),
                  distance = countDown - now;
      
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");
      
                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";
      
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());



});