import css from "./css/styles.css";
import menu from "./menu.json";
import itemsTemplates from "./templates/menu-items.hbs";

const menuRef = document.querySelector(".js-menu");
const themeSwitcherRef = document.querySelector(".theme-switch__toggle");




console.dir(themeSwitcherRef.checked);

const markup = itemsTemplates(menu);

menuRef.insertAdjacentHTML("beforeend", markup);

if (themeSwitcherRef.value === "On") {
  console.log("On");
}
