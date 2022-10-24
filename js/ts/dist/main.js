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
let contents = [
    document.querySelectorAll(".dashbord .content .dashbord_content")[0],
    document.querySelectorAll(".dashbord .content .settings_content")[0],
    document.querySelectorAll(".dashbord .content .profile_content")[0],
    document.querySelectorAll(".dashbord .content .projects_content")[0],
    document.querySelectorAll(".dashbord .content .courser_content")[0],
    document.querySelectorAll(".dashbord .content .frinds_content")[0],
    document.querySelectorAll(".dashbord .content .files_content")[0],
    document.querySelectorAll(".dashbord .content .plans_content")[0],
];
for (let i = 0; i < menu.length; i++) {
    menu[i].setAttribute("data-index", `${i}`);
    menu[i].addEventListener('click', (e) => {
        for (let i = 0; i < menu.length; i++) {
            menu[i].children[0].classList.remove('active');
        }
        let el = e.currentTarget;
        el.children[0].classList.add('active');
        title.innerHTML = el.children[0].children[1].innerHTML;
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = "none";
        }
        contents[Number(el.dataset.index)].style.display = "block";
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
let version_black_status = true;
let add_property_in_fill_css = document.styleSheets[0].cssRules[0];
let btn_active = document.querySelectorAll(".btn_active")[0];
let btn_active_i = document.querySelectorAll(".btn_active .i")[0];
if (localStorage.getItem("version_black_status") == "false") {
    add_property_in_fill_css.style.setProperty("--black", "rgb(214, 214, 214)", "important");
    add_property_in_fill_css.style.setProperty("--white", "#202020", "important");
    add_property_in_fill_css.style.setProperty("--color_3", "rgb(48 48 48)", "important");
    add_property_in_fill_css.style.setProperty("--bg_content", "rgb(18 18 18)", "important");
    version_black_status = false;
    localStorage.setItem("version_black_status", `${version_black_status}`);
    btn_active_i.style.right = "38px";
    btn_active_i.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    btn_active.classList.add("inactive");
}
document.querySelectorAll(".btn_active")[0].addEventListener("click", () => {
    if (version_black_status == true) {
        add_property_in_fill_css.style.setProperty("--black", "rgb(214, 214, 214)", "important");
        add_property_in_fill_css.style.setProperty("--white", "#202020", "important");
        add_property_in_fill_css.style.setProperty("--color_3", "rgb(48 48 48)", "important");
        add_property_in_fill_css.style.setProperty("--bg_content", "rgb(18 18 18)", "important");
        version_black_status = false;
        localStorage.setItem("version_black_status", `${version_black_status}`);
        btn_active_i.style.right = "38px";
        btn_active_i.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        btn_active.classList.add("inactive");
    }
    else {
        add_property_in_fill_css.style.removeProperty("--black");
        add_property_in_fill_css.style.removeProperty("--white");
        add_property_in_fill_css.style.removeProperty("--color_3");
        add_property_in_fill_css.style.removeProperty("--bg_content");
        version_black_status = true;
        localStorage.setItem("version_black_status", `${version_black_status}`);
        btn_active_i.style.right = "2px";
        btn_active_i.innerHTML = `<i class="fa-solid fa-check"></i>`;
        btn_active.classList.remove("inactive");
    }
});
//# sourceMappingURL=main.js.map