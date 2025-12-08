const menuBtn = document.getElementById('menu');
const linkList = document.querySelector('.link-list');

menuBtn.addEventListener('click', () => {
    linkList.classList.toggle('open');
});
