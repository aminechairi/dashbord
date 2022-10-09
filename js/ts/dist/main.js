"use strict";
let ab_input = document.querySelectorAll('.dashbord .content .nav_page .input .ab_input')[0];
let input = document.querySelectorAll('.dashbord .content .nav_page .input .ab_input input')[0];
input.addEventListener('focus', () => {
    ab_input.style.width = '100%';
    input.addEventListener('blur', () => {
        ab_input.style.width = '140px';
    });
});
let menu = document.querySelectorAll('.dashbord .menu ul li');
let title = document.querySelectorAll('.dashbord .content .title h1')[0];
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', (e) => {
        for (let i = 0; i < menu.length; i++) {
            menu[i].children[0].classList.remove('active');
        }
        let el = e.currentTarget;
        el.children[0].classList.add('active');
        title.innerHTML = el.children[0].children[1].innerHTML;
    });
}
//# sourceMappingURL=main.js.map