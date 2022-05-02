const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('.gnb');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    } else {
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

