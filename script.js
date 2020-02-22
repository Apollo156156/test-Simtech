
document.getElementById('inputCard').addEventListener('keydown', function (inputCard) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = inputCard.key === 'Backspace'; 
  if ((inputCard.key.length === 1 && /^[^\d\s]+$/.test(inputCard.key)) || (!isBackspace && value.length === 18)) {
    inputCard.preventDefault();
      return false;
  }
  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
});

function maxValue(inp) {
   inp.value = inp.value.replace(/[^-\d]/, "");
    if(Math.abs(inp.value) > 12) {
    inp.value = inp.value.substr(0,inp.value.length - 1);
  }
}
   
    function creditCard(){
      document.getElementsByClassName("main-container__form-card")[0].style="display:block;"
      document.getElementsByClassName("main-container__form-gift")[0].style="display:none;"
      document.getElementsByClassName("main-container__form-pay-pal")[0].style="display:none;"
      
    }
    function giftCard(){
      document.getElementsByClassName("main-container__form-card")[0].style="display:none;"
      document.getElementsByClassName("main-container__form-gift")[0].style="display:block;"
      document.getElementsByClassName("main-container__form-pay-pal")[0].style="display:none;"
      
    }
    function payPal(){
      document.getElementsByClassName("main-container__form-card")[0].style="display:none;"
      document.getElementsByClassName("main-container__form-gift")[0].style="display:none;"
      document.getElementsByClassName("main-container__form-pay-pal")[0].style="display:block;"
      
    }
   
   