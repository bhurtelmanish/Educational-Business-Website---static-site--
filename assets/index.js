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


const navbar = document.querySelectorAll('.navbar')[0];
const nav_links = document.querySelectorAll('.link');
//Change Navbar Color and height on scrolling
// window.addEventListener("scroll", ()=>{

//     const upArrow = document.querySelectorAll('.up-arrow-container')[0];
//     if(window.scrollY > 0){
//         navbar.classList.add('scrolled');
//         upArrow.classList.add('popup');
//         nav_links.forEach(link => {
//           link.style.color = 'var(--blackColor)';
//         });
//     }
//     else{
//         navbar.classList.remove('scrolled');
//         upArrow.classList.remove('popup');
//         nav_links.forEach(link => {
//           link.style.color = 'var(--lightTheme2)'
//         })
//     }
// })

//Navbar Responsiveness
const bars = document.querySelectorAll('.fa-bars-staggered')[0];
const links = document.querySelectorAll('.links-container')[0];
bars.addEventListener('click', ()=>{
  bars.classList.toggle('fa-xmark');
  links.classList.toggle('active');
  nav_links.forEach(link => {
    link.classList.toggle('user-toggle');
  });
})



//Courses Pagination 

const list = document.querySelectorAll('.listPage')[0];
const nodeList = document.querySelectorAll('.courses-section-main-courses .card');
const cardList = Array.from(nodeList);

let limit = 6;
let thisPage = 1;

const changePage = (i) => {
  thisPage = i;
  loadItem();
}

const listPage = () => {
  let count = Math.ceil(cardList.length / limit);
  list.innerHTML = '';

  // Create Prev button
  let prev = document.createElement('li');
  prev.innerHTML = 'Prev';
  prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
  list.appendChild(prev);

  if (thisPage === 1) {
    prev.classList.add('disabled');
    prev.removeAttribute('onclick');
  }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement('li');
    newPage.innerText = i;
    if (i === thisPage) {
      newPage.classList.add('li-active');
    }
    newPage.setAttribute('onclick', "changePage(" + i + ")");
    list.appendChild(newPage);
  }

  // Create Next button
  let next = document.createElement('li');
  next.innerText = 'Next';
  next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
  list.appendChild(next);

  if (thisPage === count) {
    next.classList.add('disabled');
    next.removeAttribute('onclick');
  }
}

const loadItem = () => {
  cardList.forEach((card , key) => {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    if(key >= beginGet && key <= endGet){
      card.style.display = 'flex';
    }else{
      card.style.display = 'none';
    }
  });
  listPage();
}
loadItem();

