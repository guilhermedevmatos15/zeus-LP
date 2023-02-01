// ! Menu reponsive
import { menuResponsive } from "./menu.js";
menuResponsive();

// ! Input verification
import { inputVerification } from "./inputVerification.js";
inputVerification();

// ! Uptade data footer (copy)
function uptadeFooter() {
   const year = document.querySelector('footer > p > span');
   let currentYear = new Date().getFullYear();
   year.innerHTML=currentYear;
}
uptadeFooter();