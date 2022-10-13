// dashbord input search
let ab_input = document.querySelectorAll('.dashbord .content .nav_page .input .ab_input')[0] as HTMLDivElement;
let input = document.querySelectorAll('.dashbord .content .nav_page .input .ab_input input')[0] as HTMLInputElement;
input.addEventListener('focus', () => {
  ab_input.style.width = '100%';
  input.addEventListener('blur', () => {
    ab_input.style.width = '140px';
  });
});

// menu
let menu = document.querySelectorAll('.dashbord .menu ul li') as NodeListOf<Element>;
let title = document.querySelectorAll('.dashbord .content .title h1')[0] as HTMLElement;

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', (e: Event) => {
    for (let i = 0; i < menu.length; i++) {
        menu[i].children[0].classList.remove('active');
    }
    let el = e.currentTarget as HTMLElement;
    el.children[0].classList.add('active');
    title.innerHTML = el.children[0].children[1].innerHTML;
  })
}

// btn active script
for (let i = 0; i <  document.querySelectorAll(".btn_active .i").length; i++) {
  let btn_active:{
    btn_active: HTMLElement;
    btn_active_i: HTMLElement;
    status: boolean;
  } = {
    btn_active: document.querySelectorAll(".btn_active")[i] as HTMLMapElement,
    btn_active_i: document.querySelectorAll(".btn_active .i")[i] as HTMLMapElement,
    status: true,
  }
  btn_active.btn_active.addEventListener("click", () => {
    if (btn_active.status == true) {
      btn_active.btn_active_i.style.right = "38px";
      btn_active.btn_active_i.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      btn_active.status = false;
      btn_active.btn_active.classList.add("inactive");
    } else {
      btn_active.btn_active_i.style.right = "2px";
      btn_active.btn_active_i.innerHTML = `<i class="fa-solid fa-check"></i>`;
      btn_active.status = true;
      btn_active.btn_active.classList.remove("inactive");
    }
  })
}

// Ssettings 
// backup manager
let backup_manager = {
  backup_manager: document.querySelectorAll(".dashbord .content .settings_content .boxs .backup_manager .tab_boxs .box"),
}
for (let i = 0; i < backup_manager.backup_manager.length; i++) {
  backup_manager.backup_manager[i].addEventListener("click", (e) => {
    for (let i = 0; i < backup_manager.backup_manager.length; i++) {
      let element = backup_manager.backup_manager[i] as HTMLElement;
      element.style.border = "1px solid var(--black)";
      let ic = element.children[0] as HTMLElement;
      ic.style.color = "var(--black)";
      let p = element.children[1] as HTMLElement;
      p.style.color = "var(--black)";
    }
    let element = e.currentTarget as HTMLElement;
    element.style.border = "2px solid #0075ff";
    let ic = element.children[0] as HTMLElement;
    ic.style.color = "#0075ff";
    let p = element.children[1] as HTMLElement;
    p.style.color = "#0075ff";
  })
}