function menuResponsive() {
   const iconMenu = document.querySelector('i.fa-bars');
   const divMenu = document.querySelector('div.menu');
   const iconX = document.querySelector('i.fa-xmark');
   iconMenu.addEventListener('click', (evt) => {
      divMenu.classList.remove('deactivate');

      evt.target.style.display='none';
      iconX.style.display='inline';
      iconX.addEventListener('click', (evt2)=>{
         evt.target.style.display='inline';
         evt2.target.style.display='none';
         divMenu.classList.add('deactivate');
      });
   });

   window.addEventListener('resize', ()=>{
      if (window.innerWidth >= 1050) {
         divMenu.classList.add('deactivate');
         iconX.style.display='none';
         iconMenu.style.display='none';
      } else {
         if (divMenu.className.includes('deactivate') === false) {
            iconX.style.display='inline';
            iconMenu.style.display='none';
         } else {
            iconX.style.display='none';
            iconMenu.style.display='inline';
         }
      }
   });
}
export { menuResponsive };