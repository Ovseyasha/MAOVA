// $(function() {
//     $("body").niceScroll();
// });
// var nice = $("#about").getNiceScroll();
// jQuery.scrollSpeed(1000, 200, 'easeOutCubic');
var wheel = true;
window.addEventListener("wheel", function(e) {
  var main = document.getElementById('main');
  if (wheel) {
    wheel = false;
    if (e.deltaY < 0) { //скрол влево
      var main = document.getElementById('main');
      main.style.transition = "all .9s ease-in-out";
      if (main.style.left !== '0px' && main.style.left !== '0%') {
        main.style.left = (parseInt(main.style.left, 10) +100) + '%';
      }

    }
    else if (e.deltaY > 0) { //скрол в право
        var main = document.getElementById('main');
        main.style.transition = "all .9s ease-in-out";
        if (main.style.left !== '-400%') {
          main.style.left = (parseInt(main.style.left, 10) -100) + '%';
        }
    }
    setTimeout(function () { wheel = true; }, 710);
  }
  // очень глупая затея готорую надо пофиксить
  document.getElementById('slider').style.transition = "all .9s ease-in-out";

  if (main.style.left ==   '0' || '0%' || '0px' ) {
    document.getElementById('slider').style.width = '0';
  }
  if (main.style.left ==  '-100%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '0%';
  }
  if (main.style.left ==  '-200%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '25%';
  }
  if (main.style.left ==  '-300%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '50%';
  }
  if (main.style.left ==  '-400%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '75%';
  }

});

//Ссылки
//ссылка на главную
document.getElementById('logo').addEventListener("click", function (){
  var main = document.getElementById('main');
  if (main.style.left == '0xp' || '0%') {
    document.getElementById('slider').style.marginLeft = '0%';
    document.getElementById('slider').style.width = '0';

    main.style.transition = "all .5s ease-in-out";
    main.style.left = '0%';
  }

});

document.getElementById('navAbout').addEventListener("click", function (){
  var main = document.getElementById('main');
  if (main.style.left == '0xp' || '0%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '0%';

    main.style.transition = "all .5s ease-in-out";
    main.style.left = '-100%';
  }

});

document.getElementById('navServices').addEventListener("click", function (){
  var main = document.getElementById('main');
  if (main.style.left == '0xp' || '0%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '25%';

    main.style.transition = "all .5s ease-in-out";
    main.style.left = '-200%';
  }

});

document.getElementById('navPortfolio').addEventListener("click", function (){
  var main = document.getElementById('main');
  if (main.style.left == '0xp' || '0%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '50%';

    main.style.transition = "all .5s ease-in-out";
    main.style.left = '-300%';
  }

});

document.getElementById('navContacts').addEventListener("click", function (){
  var main = document.getElementById('main');
  if (main.style.left == '0xp' || '0%') {
    document.getElementById('slider').style.width = '25%';
    document.getElementById('slider').style.marginLeft = '75%';

    main.style.transition = "all .5s ease-in-out";
    main.style.left = '-400%';
  }

});
