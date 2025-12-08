const menuBtn = document.getElementById('menu');
const linkList = document.querySelector('.link-list');
const closeBtn = document.createElement('span')



menuBtn.addEventListener('click', () => {
    linkList.classList.toggle('open');
    menuBtn.style.display = 'none'
});


