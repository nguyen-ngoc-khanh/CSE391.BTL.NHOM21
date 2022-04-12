/*jshint esversion: 6 */

var head = document.querySelector('.header');
var height = head.offsetHeight;
console.log(height);

window.addEventListener('scroll', (e) => {
    if (window.scrollY > height) {
        head.classList.add("active");
    } else {
        head.classList.remove("active");
    }
});

$(document).ready(function() {
    $('#icon01').click(function() {
        var lat1 = $('.uncag').next();
        $('.uncag').addClass('disappear');
        $('.uncag').fadeToggle();
        $('.uncag').one('animationend', function(event) {
            $('.disappear').removeClass('disappear');
        });
        lat1.addClass('uncag').addClass('show-up');
        lat1.one('animationend', function(event) {
            $('.show-up').removeClass('show-up');
        });
        $('.uncag').css("display", "block");
    });
});
$(document).ready(function() {
    $('#icon02').click(function() {
        var lat2 = $('.switch').prev();
        $('.switch').addClass('disappear02');
        $('.switch').fadeToggle();
        $('.switch').one('animationend', function(event) {
            $('.disappear02').removeClass('disappear02');
        });
        lat2.addClass('switch').addClass('show-up02');
        lat2.one('animationend', function(event) {
            $('.show-up02').removeClass('show-up02');
        });
        $('.switch').css("display", "block");
    });
});
$(document).ready(function() {
    $('#show').click(function() {
        var chuyen1 = $('.show-menu').next();
        $('.menu-list').css("display", "block");
        $('.show-menu').fadeToggle(0);
        chuyen1.css("display", "block");
    });
});

$(document).ready(function() {
    $('#hide').click(function() {
        var chuyen2 = $('.hide-menu').prev();
        $('.menu-list').css("display", "none");
        $('.hide-menu').fadeToggle(0);
        chuyen2.css("display", "block");
    });
});






let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let cmt = document.querySelector('.cmt').value;
    let nam = document.querySelector('.nam').value;
    let mail = document.querySelector('.email').value;
    let web= document.querySelector('.website').value;
   
    let info = {
        com: cmt,
        na: nam,
        mail: mail,
        web: web
    };

    let localInf = JSON.parse( localStorage.getItem('user'))
    console.log(localInf)
    if(localInf === null){

        let listInfo = []
        listInfo.push(info)
        localStorage.setItem('user', JSON.stringify(listInfo));
        console.log('n')
        
    }else{
        localInf.push(info)
        localStorage.setItem('user', JSON.stringify(localInf));
        console.log('y')
    }

});


