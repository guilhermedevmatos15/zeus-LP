export function inputVerification() {
   const input = document.querySelector('input');
   input.addEventListener('keyup', ()=>{
      if (input.value.includes('@') && input.value.includes('.com')) {
         input.classList.add('success');
         input.classList.remove('error');
      } else {
         input.classList.add('error');
         input.classList.remove('success');
      }
   });
}