const menuBtn = document.getElementById('menu');
const linkList = document.querySelector('.link-list');
const closeBtn = document.getElementById('close')



menuBtn.addEventListener('click', () => {
    linkList.classList.toggle('open');
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'
});

closeBtn.addEventListener('click', () => {
    linkList.classList.toggle('close')
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block'
})

