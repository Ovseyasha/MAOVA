document.getElementById('slider').style.transition = "all .9s ease-in-out";
var wheel = true;
window.addEventListener("wheel", function(e) {
  var main = document.getElementById('main');
      if (wheel) {
        wheel = false;
        if (e.deltaY < 0) { //скрол влево
          
          main.style.transition = "all .9s ease-in-out";
          if (main.style.left !== '0px' && main.style.left !== '0%') {
            main.style.left = (parseInt(main.style.left, 10) +100) + '%';
          }
        }else if (e.deltaY > 0) { //скрол в право

            main.style.transition = "all .9s ease-in-out";
            if (main.style.left !== '-400%') {
              main.style.left = (parseInt(main.style.left, 10) -100) + '%';
            }
        }
        setTimeout(function () { wheel = true; }, 710);
      }

  // очень глупая затея готорую надо пофиксить
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
  if (main.style.left == '0' || '0xp' || '0%') {
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

// Раскрытие блока услуги
// document.getElementById('block1').addEventListener("click", function () {
//
//   var main = document.getElementById('main');
//
//   var block1 = document.getElementById('block1');
//   var block2 = document.getElementById('block2');
//   var block3 = document.getElementById('block3');
//   var block4 = document.getElementById('block4');
//   var block5 = document.getElementById('block5');
//   var block6 = document.getElementById('block6');
//   var block7 = document.getElementById('block7');
//   var block8 = document.getElementById('block8');
//
//   block1.style.transition = "all .5s ease-in-out";
//   block2.style.transition = "all .5s ease-in-out";
//   block3.style.transition = "all .5s ease-in-out";
//   block4.style.transition = "all .5s ease-in-out";
//   block5.style.transition = "all .5s ease-in-out";
//   block6.style.transition = "all .5s ease-in-out";
//   block7.style.transition = "all .5s ease-in-out";
//   block8.style.transition = "all .5s ease-in-out";
//
//
//   block2.style.transform = 'scale(0,0)';
//   block2.style.opacity = '0';
//   block3.style.transform = 'scale(0,0)';
//   block3.style.opacity = '0';
//   block4.style.transform = 'scale(0,0)';
//   block4.style.opacity = '0';
//   block5.style.transform = 'scale(0,0)';
//   block5.style.opacity = '0';
//   block6.style.transform = 'scale(0,0)';
//   block6.style.opacity = '0';
//   block7.style.transform = 'scale(0,0)';
//   block7.style.opacity = '0';
//   block8.style.transform = 'scale(0,0)';
//   block8.style.opacity = '0';
//
//
//   block1.style.width = '100%';
//
// });
