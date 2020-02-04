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
  if (main.style.left ==  '0%' || '0px') {
    document.getElementById('navServices').classList.remove('border');
    document.getElementById('navPortfolio').classList.remove('border');
    document.getElementById('navContacts').classList.remove('border');
    document.getElementById('navAbout').classList.remove('border');
  }
  if (main.style.left ==  '-100%') {
    document.getElementById('navServices').classList.remove('border');
    document.getElementById('navPortfolio').classList.remove('border');
    document.getElementById('navContacts').classList.remove('border');
    document.getElementById('navAbout').classList.add('border');
  }

  if (main.style.left ==  '-200%') {
    document.getElementById('navAbout').classList.remove('border');
    document.getElementById('navPortfolio').classList.remove('border');
    document.getElementById('navContacts').classList.remove('border');
    document.getElementById('navServices').classList.add('border');
  }
  if (main.style.left ==  '-300%') {
    document.getElementById('navAbout').classList.remove('border');
    document.getElementById('navServices').classList.remove('border');
    document.getElementById('navContacts').classList.remove('border');
    document.getElementById('navPortfolio').classList.add('border');
  }
  if (main.style.left ==  '-400%') {
    document.getElementById('navAbout').classList.remove('border');
    document.getElementById('navServices').classList.remove('border');
    document.getElementById('navPortfolio').classList.remove('border');
    document.getElementById('navContacts').classList.add('border');
  }
});
