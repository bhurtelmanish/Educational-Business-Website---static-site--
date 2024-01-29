// Swiper JS
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//Change Navbar Color and height on scrolling
window.addEventListener("scroll", ()=>{
    const navbar = document.querySelectorAll('.navbar')[0];
    const links = document.querySelectorAll('.link');
    const upArrow = document.querySelectorAll('.up-arrow-container')[0];
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
        upArrow.classList.add('popup');
        links.forEach(link => {
          link.style.color = 'var(--blackColor)'
        });
    }
    else{
        navbar.classList.remove('scrolled');
        upArrow.classList.remove('popup');
        links.forEach(link => {
          link.style.color = 'var(--lightTheme2)'
        })
    }
})

//Navbar Responsiveness
const bars = document.querySelectorAll('.fa-bars-staggered')[0];
const links = document.querySelectorAll('.links-container')[0];
bars.addEventListener('click', ()=>{
  bars.classList.toggle('fa-xmark');
  links.classList.toggle('active');
})


//Course Detail Selection
const courseLinks = document.querySelectorAll('.course-links');
const courseDescs = document.querySelectorAll('.course-detail-desc');

courseLinks.forEach((courseLink , courseLinkIndex) => {
  courseLink.addEventListener('click', ()=>{
    courseDescs.forEach((courseDesc , courseDescIndex) => {
      courseDesc.style.display = courseLinkIndex === courseDescIndex ? 'block' : 'none';
    })
  });
})


//Dark Mode theme
const lightContentList1 = document.querySelectorAll('.light-content1');
const themeButton = document.querySelectorAll('.fa-moon')[0];

themeButton.addEventListener('click', () => {
  lightContentList1.forEach(content=>{
    content.classList.toggle('dark-mode');
  })
});

