var dialog = document.querySelector('dialog');
document.querySelector('#openDialog').onclick = function() { 
 document.getElementsByClassName('body')[0].style= "background-color: #8c8989; ";
 document.getElementsByClassName('main-container__order-button')[0].style="opacity:0.3;pointer-events: none;";
 document.getElementsByClassName('main-container__label')[0].style="pointer-events: none;";
 document.getElementsByClassName('main-container__agreement')[0].style="background-color: #8c8989; border-color: #8c8989;";
 document.getElementsByClassName('main-container__data')[0].style= "opacity:0.3; pointer-events: none;";
 document.getElementsByClassName('logo')[0].style= "opacity:0.3";
 document.getElementsByClassName('main-container__payment-method')[0].style= "opacity:0.3; pointer-events: none;";
 
 
 
 dialog.show(); // Показываем диалоговое окно
}
document.querySelector('#closeDialog').onclick = function() {
 document.getElementsByClassName('body')[0].style= "background-color: white";
 document.getElementsByClassName('main-container__order-button')[0].style="opacity:1; pointer-events: auto;";
 document.getElementsByClassName('main-container__agreement')[0].style="background-color: #f7f7f7; border-color: #e3e3e3;";
 document.getElementsByClassName('main-container__data')[0].style= "opacity:1; pointer-events: auto;";
 document.getElementsByClassName('logo')[0].style= "opacity:1";
 document.getElementsByClassName('main-container__payment-method')[0].style= "opacity:1; pointer-events: auto;";
 document.getElementsByClassName('main-container__label')[0].style="pointer-events: auto;";
 dialog.close(); // Прячем диалоговое окно
}
