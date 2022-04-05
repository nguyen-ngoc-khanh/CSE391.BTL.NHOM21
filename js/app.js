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
head.addEventListener('click', () => {
    console.log("click header")
})
$(document).ready(function() {
    $('#icon01').click(function() {
        var slide_sau = $('.uncag').next();
        $('.uncag').addClass('disappear');

        $('.uncag').fadeOut(500).one('AnimationEnd', function(event) {
            $('.disappear').removeClass('disappear').removeClass('uncag');
        });
        slide_sau.addClass('uncag').addClass('show-up').one('AnimationEnd', function(event) {
            $('.show-up').removeClass('show-up');
        });
    });
});

$(document).ready(function() {
    $('#icon02').click(function() {
        $('.switch').addClass('uncag');
        $('.uncag').fadeIn(500);

        var slide_truoc = $('.switch').prev();
        $('.switch').addClass('disappear02');
        $('.switch').fadeOut(500).one('AnimationEnd02', function(event) {
            $('.disappear02').removeClass('disappear02').removeClass('switch');
        });
        slide_truoc.addClass('switch').addClass('show-up02').one('AnimationEnd02', function(event) {
            $('.show-up02').removeClass('show-up02');
        });
    });
});