

// ! Menu hamburguer


// ! Input verification


// ! Card images


// ! Uptade data footer (copy)
function uptadeFooter() {
   const year = document.querySelector('footer > p > span');
   let currentYear = new Date().getFullYear();
   year.innerHTML=currentYear;
}
uptadeFooter();