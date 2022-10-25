"use strict";
let input_search = {
    ab_input: document.querySelectorAll('.dashbord .content .nav_page .input .ab_input')[0],
    input: document.querySelectorAll('.dashbord .content .nav_page .input .ab_input input')[0],
};
input_search.input.addEventListener('focus', () => {
    input_search.ab_input.style.width = '100%';
    input_search.input.addEventListener('blur', () => {
        input_search.ab_input.style.width = '140px';
    });
});
let switch_content = {
    menu: document.querySelectorAll('.dashbord .menu ul li'),
    title: document.querySelectorAll('.dashbord .content .title h1')[0],
    contents: [
        document.querySelectorAll(".dashbord .content .dashbord_content")[0],
        document.querySelectorAll(".dashbord .content .settings_content")[0],
        document.querySelectorAll(".dashbord .content .profile_content")[0],
        document.querySelectorAll(".dashbord .content .projects_content")[0],
        document.querySelectorAll(".dashbord .content .courser_content")[0],
        document.querySelectorAll(".dashbord .content .frinds_content")[0],
        document.querySelectorAll(".dashbord .content .files_content")[0],
        document.querySelectorAll(".dashbord .content .plans_content")[0],
    ],
};
if (sessionStorage.getItem(`display_content`)) {
    for (let i = 0; i < switch_content.contents.length; i++) {
        switch_content.contents[i].style.display = `none`;
        switch_content.menu[i].children[0].classList.remove(`active`);
    }
    switch_content.contents[Number(sessionStorage.getItem(`display_content`))].style.display = `block`;
    switch_content.menu[Number(sessionStorage.getItem(`display_content`))].children[0].classList.add(`active`);
    switch_content.title.innerHTML = switch_content.menu[Number(sessionStorage.getItem(`display_content`))].children[0].children[1].innerHTML;
}
else {
    switch_content.contents[0].style.display = `block`;
    switch_content.menu[0].children[0].classList.add(`active`);
    switch_content.title.innerHTML = switch_content.menu[0].children[0].children[1].innerHTML;
}
sessionStorage.clear();
for (let i = 0; i < switch_content.menu.length; i++) {
    switch_content.menu[i].setAttribute(`data-index`, `${i}`);
    switch_content.menu[i].addEventListener(`click`, () => {
        for (let i = 0; i < switch_content.menu.length; i++) {
            switch_content.menu[i].children[0].classList.remove(`active`);
            switch_content.contents[i].style.display = `none`;
        }
        switch_content.menu[i].children[0].classList.add(`active`);
        switch_content.title.innerHTML = switch_content.menu[i].children[0].children[1].innerHTML;
        switch_content.contents[Number(switch_content.menu[i].getAttribute(`data-index`))].style.display = `block`;
        sessionStorage.setItem(`display_content`, switch_content.menu[i].getAttribute(`data-index`));
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