var head = document.querySelector('.header')
var height = head.offsetHeight
console.log(height)

window.addEventListener('scroll', (e) => {
    if (window.scrollY > height) {
        head.classList.add("active")
    } else {
        head.classList.remove("active")
    }
})


$(document).ready(function() {
    $('#dauTK').click(function(e) {
        console.log("check");
    });
});
$(document).ready(function() {
    $('#icon01').click(function() {
        var lat1 = $('.uncag').next();
        $('.uncag').addClass('disappear');
        $('.uncag').fadeToggle();
        $('.uncag').one('animationend', function(event) {
            $('.disappear').removeClass('disappear');
        })
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
        })
        lat2.addClass('switch').addClass('show-up02');
        lat2.one('animationend', function(event) {
            $('.show-up02').removeClass('show-up02');
        });
        $('.switch').css("display", "block");
    });
});