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
for (let i = 0; i < document.querySelectorAll(".btn_active .i").length; i++) {
    let btn_active = {
        btn_active: document.querySelectorAll(".btn_active")[i],
        btn_active_i: document.querySelectorAll(".btn_active .i")[i],
        status: true,
    };
    btn_active.btn_active.addEventListener("click", () => {
        if (btn_active.status == true) {
            btn_active.btn_active_i.style.right = "38px";
            btn_active.btn_active_i.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            btn_active.status = false;
            btn_active.btn_active.classList.add("inactive");
        }
        else {
            btn_active.btn_active_i.style.right = "2px";
            btn_active.btn_active_i.innerHTML = `<i class="fa-solid fa-check"></i>`;
            btn_active.status = true;
            btn_active.btn_active.classList.remove("inactive");
        }
    });
}
let backup_manager = {
    backup_manager: document.querySelectorAll(".dashbord .content .settings_content .boxs .backup_manager .tab_boxs .box"),
};
for (let i = 0; i < backup_manager.backup_manager.length; i++) {
    backup_manager.backup_manager[i].addEventListener("click", (e) => {
        for (let i = 0; i < backup_manager.backup_manager.length; i++) {
            let element = backup_manager.backup_manager[i];
            element.style.border = "1px solid var(--black)";
            let ic = element.children[0];
            ic.style.color = "var(--black)";
            let p = element.children[1];
            p.style.color = "var(--black)";
        }
        let element = e.currentTarget;
        element.style.border = "2px solid #0075ff";
        let ic = element.children[0];
        ic.style.color = "#0075ff";
        let p = element.children[1];
        p.style.color = "#0075ff";
    });
}
//# sourceMappingURL=main.js.map