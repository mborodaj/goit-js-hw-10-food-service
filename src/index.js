import css from "./css/styles.css";
import menu from "./menu.json";
import itemsTemplates from "./templates/menu-items.hbs";

const menuRef = document.querySelector(".js-menu");
const themeSwitcherRef = document.getElementById("theme-switch-toggle");
const bodyRef = document.querySelector("body");

const markup = itemsTemplates(menu);

menuRef.insertAdjacentHTML("beforeend", markup);

setTheme();

themeSwitcherRef.addEventListener("change", changeTheme);

function changeTheme() {
  if (this.checked) {
    bodyRef.setAttribute("class", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    bodyRef.setAttribute("class", "light-theme");
    localStorage.setItem("theme", "light-theme");
  }
  localStorage.setItem("switcherChecked", this.checked);
}

function setTheme() {
  document.body.classList.remove("dark-theme");
  document.body.classList.remove("light-theme");
  document.body.classList.add(localStorage.getItem("theme"));
  themeSwitcherRef.checked = JSON.parse(
    localStorage.getItem("switcherChecked"),
  );
}
