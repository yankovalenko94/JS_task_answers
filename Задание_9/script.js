window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});


  // Скрыли все табы, кроме 1-го. А лучше через HTML скрыть все, показать только 1, экономим)
  tabContent.forEach((item) => {
    if(tabContent[0] !== item) {
      item.classList.remove('show');
      item.classList.add('hide');
    }
  });

  info.addEventListener('click', (e) => {
    let target = e.target;
    let el = target.closest('div.info-header-tab');

    if(el) { // Проверяем, есть ли он вообще, клацнули ли на него
      for(let i = 0; i < tab.length; i++) {
        // Скрыли все табы, используя тот же - один цикл
        tabContent[i].classList.remove('show'); 
        tabContent[i].classList.add('hide');
        if(el === tab[i]) {
          tabContent[i].classList.remove('hide');
          tabContent[i].classList.add('show');
        }
      }
    } 
    else {
      return;
    }
  });
