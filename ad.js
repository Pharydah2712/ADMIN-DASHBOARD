const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.style.display = "none";

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
    menuBtn.style.display = "none"
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
    menuBtn.style.display = "block"
})
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})