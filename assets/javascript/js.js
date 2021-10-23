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

        console.log(ev.target.dataset.link);

        //adicionar o link no html do popup
        
        $(".popup a").attr("href",ev.target.dataset.link);
        $(".popup iframe").attr("src",ev.target.dataset.link);


    });
}


closePopupButton[0].addEventListener("click",()=>{
    popup.classList.remove('active');
    overlay.classList.remove('active');;

    $(".popup a").attr("href","");
    $(".popup iframe").attr("src","");
}); //quando clica no 'x' no topo do popup, remove a classe active e o popup se esconde

overlay.addEventListener("click",()=>{
    popup.classList.remove('active');
    overlay.classList.remove('active');

    $(".popup a").attr("href","");
    $(".popup iframe").attr("src","");
}); //quando clica em qualquer parte da tela fora do popup ele se esconde


/* 
* criar o carrossel 
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

const card0 = $(".card-0");
card0.attr("data-link","https://pt.wikipedia.org/wiki/Placenta");

const card1 = $(".card-1");
card1.attr("data-link","https://pt.wikipedia.org/wiki/Alantoc%C3%B3rion");

const card2 = $(".card-2");
card2.attr("data-link","https://pt.wikipedia.org/wiki/%C3%82mnion");

const card3 = $(".card-3");
card3.attr("data-link","https://pt.wikipedia.org/wiki/C%C3%B3rion");

const card4 = $(".card-4");
card4.attr("data-link","https://pt.wikipedia.org/wiki/Vitelo");

const card5 = $(".card-5");
card5.attr("data-link","https://editora.pucrs.br/edipucrs/acessolivre/livros/atlas-de-histologia/gametogenese.html");

const card6 = $(".card-6");
card6.attr("data-link","https://spmr.pt/34-repropedia/s/348-saco-vitelino");

const card7 = $(".card-7");
card7.attr("data-link","https://origen.com.br/o-que-e-zigoto/");

const card8 = $(".card-8");
card8.attr("data-link","https://pt.wikipedia.org/wiki/Chalaza");

const card9 = $(".card-9");
card9.attr("data-link","https://pt.wikipedia.org/wiki/M%C3%B3rula");

const card10 = $(".card-10");
card10.attr("data-link","https://mundoeducacao.uol.com.br/biologia/hemacias.htm");

const card11 = $(".card-11");
card11.attr("data-link","https://mundoeducacao.uol.com.br/biologia/neuronios.htm");

const card12 = $(".card-12");
card12.attr("data-link","https://pt.wikipedia.org/wiki/Adip%C3%B3cito");

const card13 = $(".card-13");
card13.attr("data-link","https://www.sanarmed.com/hematopoiese");

const card14 = $(".card-14");
card14.attr("data-link","https://www.sobiologia.com.br/conteudos/embriologia/reproducao9.php");




});




/*
    ! atribuir os links aos cards
*/






