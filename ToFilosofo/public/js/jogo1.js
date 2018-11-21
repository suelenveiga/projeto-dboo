let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let parag = document.getElementsByClassName('parag');
let image = document.getElementById('image');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");

let pergunta = ["Qual desses filósofos propôs a classificação das ciências em três grupos: Ciência da Imaginação (poesia), Ciência da Memória (História) e Ciência da Razão (Filosofia)?","Quais dessas frases foram ditas por Francis Bacon?","Bacon é considerado o pai do empirismo moderno por ter formulado os fundamentos dos métodos de análise e pesquisa da ciência moderna. Pois para ele:","Como Emanuel Kant (1724-1804), entendia e defendia o conceito da beleza?","Como Kant encara o ‘’Sentimento’’ e o ‘’ Prazer’’?","O discurso sobre o Método é obra de qual filosofo?","Para Descartes como era a sua base para a formação da Estética?","Quais dessas frases são do filósofo René Descartes?Quais dessas frases são do filósofo René Descartes?","Quais dessas frases são do filósofo René Descartes?Quais dessas frases são do filósofo René Descartes?","Quais dessas frases são de David hume?Quais dessas frases são de David hume?","Quais dessas Obras são de David Hume?Quais dessas Obras são de David Hume?"];

let resposta = [["(A)Francis Bacon (1561-1626)","(B)Immanuel Kant (1724-1804)","(C)René Descartes (1596-1650)","(D)David Hume (1711-1776)"],
["(A)Todas as alternativas.","(B)A verdade aparece mais facilmente do erro do que da confusão.","(C)As esposas são amantes dos homens mais novos, companheiras para os de meia-idade e amas para os idosos.","A verdade aparece mais facilmente do erro do que da confusão."],
["(A)O empirismo é a escola do pensamento filosófico relacionada à teoria do conhecimento.","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(C)A questão de como é possível o conhecimento afirmando o papel constitutivo de mundo pelo sujeito transcendental.","(D)Todo o conhecimento tem origem na experiência, sendo os dados ou impressões sensíveis as suas unidades básicas."],
["(A)Uma dimensão objetiva.","(B)objetiva","(C)Todas estão corretas.","(D)É subjetiva."],
["(A)É conhecimento.","(B)Algo especifico e particular.","(C)Acompanha a intuição.","(D)Nenhuma das alternativas."],
["(A)John Locke (1632-1704)","(B)Aristóteles (384 a.C.-322 a.C.)","(C)René Descartes (1596-1650)","(D)Francis Bacon (1561-1626)"],
["(A)Todas as alternativas.","(B)É para estabelecer uma relação entre o método, a formação do gosto e os fundamentos da estética, que serão encontrados posteriormente como disciplina do conhecimento.","(C)É a ideia de beleza, e sua consequente fruição estética, vário conforme as transformações das sociedades humanas no tempo.","(D)É para determinarmos que algo é belo precisamos de uma coincidência entre o juízo e os sentimento, todo olhar racional pode sentir."],
["(A)O primeiro passo para o bem é não fazer o mal.","(B)Sábio é aquele que conhece os limites da própria ignorância.","(C)Tente mover o mundo o primeiro passo será mover a si mesmo.","(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra."],
["(A)David Hume (1711-1776)","(B)Immanuel Kant (1724-1804)","(C)Francis Bacon (1561-1626)","(D)René Descartes (1596-1650)"],
["(A)Afirmações extraordinárias necessitam de provas extraordinárias.","(B)Muitas vezes as coisas que me pareceram verdadeiras quando comecei a concebê-las tornaram-se falsas quando quis coloca-las sobre o papel.","(C)’’Não somos ricos pelo que temos e sim pelo que não precisamos ter.","(D)’’A verdade aparece mais facilmente do erro do que da confusão’’."]];
let gabarito = ["(A)Francis Bacon (1561-1626)","(A)Todas as alternativas.","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(D)É subjetiva.","(B)Algo especifico e particular.","(C)René Descartes (1596-1650)","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra.","(A)David Hume (1711-1776)","(A)Afirmações extraordinárias necessitam de provas extraordinárias."];  
let aux = 0;
let ctd = 0; 
this.pontos = 0;
button1.addEventListener("click",function(e){
    e.preventDefault();
    image.style.backgroundImage = "none";
    alterna.style.display = "block";
    document.getElementById('parag').innerHTML="Acertos:"+this.pontos;
    for (let i = 1; i <= 5; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
    }   
});

respos.addEventListener('click',clicou);
function clicou(event) {
    if(event.target.tagName === 'BUTTON'){  
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: "+this.pontos;
        if (aux == pergunta.length) {
            return fim();
        }
        else {
            this.pontos++;
            for (let i = 1; i <= 4; i++) {
            let button = document.getElementById('b'+i);
            button.textContent = resposta[aux][i-1];
            document.getElementById('questao').innerHTML = pergunta[aux];            
            }
             console.log("acertei");
             ctd++;
             aux++;
             console.log("ctd"+ctd);
             console.log("aux"+aux);
             muda();

        }   
        }
        
}

    }

function fim(){
    aux = 0;
    ctd = 0;
    tem = 0;
    muda();
    alert("Fim de Jogo\n Sua pontuação foi "+this.pontos+" pontos");
    this.pontos = 0;
}
function muda() {
    document.getElementById('parag').innerHTML="Acertos"+this.pontos;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
    } 
}