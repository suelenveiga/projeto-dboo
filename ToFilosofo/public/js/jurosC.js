const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

let anterior = "";
let anteriorlabel = "";
let selectjs = document.getElementById('selectjs');
selectjs.addEventListener('change', function(){
    document.getElementById("oculta").style.display = "block"; 
    if (anterior!="") {
        document.getElementById(anterior).style.display = "block";   
        document.getElementById(anteriorlabel).style.display = "block";          
        
    }
    this.vetor = ["m","c","i","j","t"]; 
    this.value = this.value.toString();
    for (var i = 0; i<=4; i++) {  
        if (this.vetor[i] == this.value) {
            document.getElementById(this.value+i).style.display = "none";            
            document.getElementById(this.value).style.display = "none";
            anterior = this.value;
            anteriorlabel = this.value+i;             
        }
    }
});

form.addEventListener('submit', function(e) {
    document.getElementById('contem').innerHTML = "";  
    console.log("entouu");        
    let m = parseInt(document.getElementById('m').value);
    let c = parseInt(document.getElementById('c').value);
    let i = parseInt(document.getElementById('i').value);
    let j = parseInt(document.getElementById('j').value);
    let t = parseInt(document.getElementById('t').value);
    let classJS = new Juroscompostos (m,c,i,j,t);
    e.preventDefault();
});
 
class Juroscompostos {
    constructor (m,c,i,j,t){
        console.log("entouu");
        let formula = "";
        let desenvolvimento = "";
        let soma = 1+i;
        let sub = (Math.pow(m/c,1/t)) - 1;
        if (selectjs.value == "m") {
            formula = "M = C * (1 + i)^t";
            desenvolvimento = "M = "+c+" * (1 + "+i+")"+"^"+t+" -- > M = "+c+" * ("+soma+")^"+t+" -- > M = "+c+" * "+Math.pow(soma,t)+" -- > M = "+c * Math.pow(soma,t);
        }
        if (selectjs.value == "j") {
            formula = "J = C - M";
            let subtra = c-m;
            desenvolvimento = "J = "+c+" - "+m+" -- > J = "+subtra;
        }
        if (selectjs.value == "i") {
            console.log("ii");
            formula = "M = C * (1 + i)^t";
            desenvolvimento = m+" = "+c+"(1 + i)^"+t+" -- > "+m+"/"+c+" = (1 + i)^"+t+" -- > "+m/c+" = (1 + i)^"+t+" -- > "+t+"^√"+m/c+" = "+t+"^√((1 + i)^"+t+") -- > "+Math.pow(m/c,1/t)+" = 1 + i --> i = "+Math.pow(m/c,1/t)+" - 1 -- > i = "+sub+" -- > "+sub+" * 100 -- > "+sub*100+"%";
        }
        if (selectjs.value == "c") {
            sub = Math.pow(soma,t) - 1;
            formula = "M = C * (1 + i)^t";
            desenvolvimento = m+" = C * (1 +"+i+")^"+t+" -- > "+m+" = C  * ("+soma+")^"+t+" -- > "+m+" = C * "+Math.pow(soma,t)+" -- > C = "+m+"/"+Math.pow(soma,t)+" -- > C = "+m/Math.pow(soma,t);
        }
        if (selectjs.value == "t") {
            formula = "M = C * (1 + i)^t";
            desenvolvimento = m+" = "+c+" * (1 +"+i+")^t -- > "+m+"/"+c+" = ("+soma+")^t -- > "+m/c+" = ("+soma+")^t -- > t = log("+m/c+")/log("+soma+") -- > t = "+Math.log(m/c)+"/"+Math.log(soma)+" -- > t = "+Math.log(m/c)/Math.log(soma);
        }
        let source = document.querySelector("#source").innerHTML;
        let template = Handlebars.compile(source);
        let html = template({
            jurosTabela: {linha:"formula", formula:formula, desenvolvimento:desenvolvimento, resposta:""}
        });
        document.querySelector('thead').innerHTML = html;
    }
}