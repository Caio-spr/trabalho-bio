// *abrir o popup quando clica no "saiba mais"

/*
* o que precisa:

* pegar as classes e trasnformar em variáveis
! adicionar a classe "active" quando apertar o botão do card
! remover a classe active quando clicar no x ou em qualquer ponto do overlay
! profit

*/



const openPopupButton = document.querySelectorAll(".open-popup-button");
const closePopupButton = document.querySelectorAll("[data-close-button]");
const overlay= document.getElementById("overlay");
const popup=document.querySelector('.popup');


for(var i = 0; i< openPopupButton.length;i++){ //pra funcionar em todos os cards
    openPopupButton[i].addEventListener("click",(ev)=>{
        popup.classList.add('active')
        overlay.classList.add('active');

        console.log(ev.target.dataset.id); // pra dar log no id que eu vou usar pra indicar que site abrir
    });
}


closePopupButton[0].addEventListener("click",()=>{
    popup.classList.remove('active');
    overlay.classList.remove('active');;
}); //quando clica no 'x' no topo do popup, remove a classe active e o popup se esconde

overlay.addEventListener("click",()=>{
    popup.classList.remove('active');
    overlay.classList.remove('active');
    console.log(ev.target.dataset.id);
});





