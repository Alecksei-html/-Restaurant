document.addEventListener('DOMContentLoaded',() => {
    
  const tabs = document.querySelectorAll('.dot'),
        tabsContent = document.querySelectorAll('.slidercontent'),
        tabsPerent = document.querySelector('.tabheader__items');

  function hideTabsContent () {
      tabsContent.forEach (item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
      });

      tabs.forEach (item => {
          item.classList.remove('dot_active');
      });
  }

  function showTabaContent (i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('dot_active');
  }

  hideTabsContent();
  showTabaContent();

  tabsPerent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('dot')) {
          tabs.forEach ((item, i) => {
              if (target == item) {
                  hideTabsContent();
                  showTabaContent(i);
              }
          });
      }
  });
});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slidercontent");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1 }
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000);
// }