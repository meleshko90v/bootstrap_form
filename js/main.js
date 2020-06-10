// img window height
$(document).ready(function(){
    $('.header').height($(window).height());
});

// Page scrolling by clicking on links in the navigation bar
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});

//button yes
let button = document.getElementById("button");
button.addEventListener('click', function () {
    swal("Good job!", "", "success")
});

// button no
let dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
    dialog.show();
};
document.querySelector('#close').onclick = function() {
    dialog.close();
};

//
