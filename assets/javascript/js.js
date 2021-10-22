// *abrir o popup quando clica no "saiba mais"

/* 
quando tiver "?" antes de uma coisa é um problema ou questão que eu tenho que resolver

? como fazer um carrossel?

quando tiver um "!" antes, significa que é uma tarefa que eu ainda não fiz ou que é um bug

! organizar os cards

quando tiver um "*" antes significa que é uma tarefa já concluida, ou é só algo que quero destacar

* Transformar as classes css em variáveis no js


*/




/*
? o que precisa?:

* pegar as classes e trasnformar em variáveis
* adicionar a classe "active" quando apertar o botão do card
* remover a classe active quando clicar no x ou em qualquer ponto do overlay


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
}); //quando clica em qualquer parte da tela fora do popup ele se esconde


/* 
! criar o carrossel 
*/




let grid = document.getElementById("grid");
let posGrid= 0;

$(document).ready(()=>{
    
    console.log("iniciado");


    $("#next").click(()=>{
        
        posGrid = posGrid+1;
        
        if(posGrid>$(".card").length-4){
            posGrid=0;
        }

        $("#grid").animate({"left":-$(".card").eq(posGrid).position().left},200);
        
    });

    $("#prev").click(()=>{
        posGrid = posGrid-1;
        if(posGrid<0){
            posGrid=$(".card").length-4;
        }
        $("#grid").animate({"left":-$(".card").eq(posGrid).position().left},200);
    });
});


