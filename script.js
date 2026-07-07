/*=========================================
      BEM ESTAR RECEPÇÕES
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarCarrossel();
    iniciarModal();
    iniciarBotaoTopo();
    iniciarHeader();

});

/*=========================================
        CARROSSEL DE FOTOS
=========================================*/

function iniciarCarrossel(){

    const slides = document.querySelector(".slides");

    if(!slides) return;

    const slide = document.querySelectorAll(".slide");

    const prev = document.querySelector(".prev");

    const next = document.querySelector(".next");

    const dotsContainer = document.querySelector(".dots");

    let index = 0;

    const total = slide.length;

    let intervalo;



    // Criar indicadores

    slide.forEach((_,i)=>{

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if(i===0){

            dot.classList.add("active");

        }

        dot.addEventListener("click",()=>{

            index=i;

            atualizar();

            reiniciar();

        });

        dotsContainer.appendChild(dot);

    });

    const dots=document.querySelectorAll(".dot");



    function atualizar(){

        slides.style.transform=`translateX(-${index*100}%)`;



        dots.forEach(dot=>{

            dot.classList.remove("active");

        });



        dots[index].classList.add("active");

    }



    function proximo(){

        index++;

        if(index>=total){

            index=0;

        }

        atualizar();

    }



    function anterior(){

        index--;

        if(index<0){

            index=total-1;

        }

        atualizar();

    }



    function iniciar(){

        intervalo=setInterval(()=>{

            proximo();

        },4500);

    }



    function reiniciar(){

        clearInterval(intervalo);

        iniciar();

    }



    next.addEventListener("click",()=>{

        proximo();

        reiniciar();

    });



    prev.addEventListener("click",()=>{

        anterior();

        reiniciar();

    });



    iniciar();

}


/*=========================================
            MODAL MAPA
=========================================*/

function iniciarModal() {

    const abrir = document.getElementById("openModal");

    if (!abrir) return;

    abrir.onclick = () => {

        const latitude = -8.112011281162271;
        const longitude = -34.97638342679918;

        const ua = navigator.userAgent || navigator.vendor || window.opera;

        // iPhone
        if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
            window.open(
                `https://maps.apple.com/?daddr=${latitude},${longitude}`,
                "_blank"
            );
            return;
        }

        // Android
        if (/android/i.test(ua)) {
            window.location.href = `geo:${latitude},${longitude}?q=${latitude},${longitude}(Bem Estar Recepções)`;
            return;
        }

        // PC
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
            "_blank"
        );
    };

}

/*=========================================
        BOTÃO VOLTAR AO TOPO
=========================================*/

function iniciarBotaoTopo(){

    const botao=document.querySelector(".back-to-top");



    if(!botao) return;



    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            botao.classList.add("show");

        }

        else{

            botao.classList.remove("show");

        }

    });

}


/*=========================================
          HEADER SCROLL
=========================================*/

function iniciarHeader(){

    const header=document.getElementById("header");



    if(!header) return;



    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}

/*=========================================
        AVALIAÇÕES
=========================================*/

const avaliacoes = [

{
nome:"Mariana Silva",
nota:5,
texto:"Meu casamento foi perfeito. O espaço é lindo, organizado e a equipe foi extremamente atenciosa."
},

{
nome:"Carlos Eduardo",
nota:4.9,
texto:"Excelente atendimento. Todos os convidados elogiaram o ambiente."
},

{
nome:"Juliana Souza",
nota:5,
texto:"Superou todas as nossas expectativas. Recomendo de olhos fechados."
},

{
nome:"Felipe Santos",
nota:4.8,
texto:"Espaço maravilhoso, muito bem cuidado e ótima localização."
},

{
nome:"Patrícia Lima",
nota:5,
texto:"Foi uma noite inesquecível. Tudo saiu exatamente como planejamos."
},

{
nome:"Ana Beatriz",
nota:4.9,
texto:"Equipe muito educada e um ambiente extremamente agradável."
},

{
nome:"Roberto Alves",
nota:4.8,
texto:"Excelente estrutura para eventos familiares."
},

{
nome:"Camila Rodrigues",
nota:5,
texto:"Lugar lindo, confortável e muito bem organizado."
},

{
nome:"João Pedro",
nota:4.7,
texto:"Tudo muito bonito e atendimento excelente."
},

{
nome:"Fernanda Oliveira",
nota:5,
texto:"Com certeza voltaremos em futuras comemorações."
},

{
nome:"Lucas Martins",
nota:4.8,
texto:"Ótima experiência desde o primeiro atendimento."
},

{
nome:"Gabriela Costa",
nota:5,
texto:"Perfeito para casamentos e aniversários."
},

{
nome:"Ricardo Gomes",
nota:4.9,
texto:"Tudo impecável."
},

{
nome:"Amanda Ferreira",
nota:5,
texto:"Ambiente elegante e muito confortável."
},

{
nome:"Bruno Henrique",
nota:4.8,
texto:"Vale muito a pena conhecer."
},

{
nome:"Larissa Melo",
nota:5,
texto:"Fiquei encantada com cada detalhe."
},

{
nome:"Thiago Ribeiro",
nota:4.7,
texto:"Organização excelente."
},

{
nome:"Vanessa Araújo",
nota:5,
texto:"Equipe nota mil."
},

{
nome:"José Ricardo",
nota:4.9,
texto:"Super recomendo."
},

{
nome:"Paula Cristina",
nota:5,
texto:"Lugar incrível."
},

{
nome:"Renato Lima",
nota:4.8,
texto:"Muito melhor do que imaginávamos."
},

{
nome:"Aline Gomes",
nota:5,
texto:"Tudo muito bonito."
},

{
nome:"Daniel Carvalho",
nota:4.7,
texto:"Excelente custo-benefício."
},

{
nome:"Priscila Santos",
nota:5,
texto:"Atendimento impecável."
},

{
nome:"Vinícius Rocha",
nota:4.8,
texto:"Estrutura muito boa."
},

{
nome:"Natália Almeida",
nota:5,
texto:"Ambiente maravilhoso."
},

{
nome:"Leandro Souza",
nota:4.9,
texto:"Voltaremos com certeza."
},

{
nome:"Bianca Oliveira",
nota:5,
texto:"Foi tudo perfeito."
},

{
nome:"Marcelo Barros",
nota:4.8,
texto:"Todos adoraram a festa."
},

{
nome:"Carolina Freitas",
nota:5,
texto:"Experiência incrível."
}

];



iniciarAvaliacoes();



function iniciarAvaliacoes(){

    const track=document.querySelector(".review-track");

    const dots=document.querySelector(".review-dots");

    const prev=document.querySelector(".review-prev");

    const next=document.querySelector(".review-next");

    if(!track) return;

    let indice=0;

    avaliacoes.forEach((item,i)=>{

        const card=document.createElement("div");

        card.className="review-card";

        const estrelas=Math.round(item.nota);

        let htmlEstrelas="";

        for(let j=0;j<estrelas;j++){

            htmlEstrelas+=`<i class="fa-solid fa-star"></i>`;

        }

        card.innerHTML=`

            <div class="review-avatar">

                ${item.nome.charAt(0)}

            </div>

            <div class="review-name">

                ${item.nome}

            </div>

            <div class="review-rating">

                ${htmlEstrelas}

                <span class="review-score">${item.nota}</span>

            </div>

            <p class="review-text">

                "${item.texto}"

            </p>

        `;

        track.appendChild(card);

        const dot=document.createElement("span");

        dot.className="review-dot";

        if(i===0){

            dot.classList.add("active");

        }

        dot.onclick=()=>{

            indice=i;

            atualizar();

            reiniciar();

        }

        dots.appendChild(dot);

    });

    const cards=document.querySelectorAll(".review-card");

    const indicadores=document.querySelectorAll(".review-dot");

    function atualizar(){

        track.style.transform=`translateX(-${indice*100}%)`;

        indicadores.forEach(d=>d.classList.remove("active"));

        indicadores[indice].classList.add("active");

    }

    function proximo(){

        indice++;

        if(indice>=cards.length){

            indice=0;

        }

        atualizar();

    }

    function anterior(){

        indice--;

        if(indice<0){

            indice=cards.length-1;

        }

        atualizar();

    }

    next.onclick=()=>{

        proximo();

        reiniciar();

    }

    prev.onclick=()=>{

        anterior();

        reiniciar();

    }

    let timer;

    function autoplay(){

        timer=setInterval(proximo,4500);

    }

    function reiniciar(){

        clearInterval(timer);

        autoplay();

    }

    autoplay();

}
