import css from "./css/styles.css";
import menu from "./menu.json";
import itemsTemplates from "./templates/menu-items.hbs";

const menuRef = document.querySelector(".js-menu");
const themeSwitcherRef = document.getElementById("theme-switch-toggle");
const bodyRef = document.querySelector("body");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markup = itemsTemplates(menu);

menuRef.insertAdjacentHTML("beforeend", markup);

setTheme();

themeSwitcherRef.addEventListener("change", changeTheme);

function changeTheme() {
  if (this.checked) {
    bodyRef.setAttribute("class", Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    bodyRef.setAttribute("class", Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  }
  localStorage.setItem("switcherChecked", this.checked);
}

function setTheme() {

  if (localStorage.getItem('theme') !== null) {
    document.body.classList.add(localStorage.getItem("theme"));
  }

  if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitcherRef.checked = true
  }
    
}


