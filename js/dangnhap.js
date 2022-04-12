$(document).ready(function() {
    $('#eye').click(function(e) {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});

let btn = document.querySelector('.button')
if (btn) {
    btn.addEventListener('click', function() {
            let tk = document.querySelector('.form-input-acc').value
            let mk = document.querySelector('.form-input-pwd').value
            if (tk == 'quantri') {
                if (mk == 'khanh' || mk == 'duy' || mk == 'hoang') {
                    $('.form-submit').attr('type', 'button')
                }
            })
    }