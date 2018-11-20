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
    let m = parseInt(document.getElementById('m').value);
    let c = parseInt(document.getElementById('c').value);
    let i = parseInt(document.getElementById('i').value);
    let j = parseInt(document.getElementById('j').value);
    let t = parseInt(document.getElementById('t').value);
    let classJS = new Jurossimples (m,c,i,j,t);
    e.preventDefault();
});
 
class Jurossimples {
    constructor (m,c,i,j,t){
        let soma = 0; 
        let formula = document.createElement("p");
        let desenvolvimento = document.createElement("p");
        if (selectjs.value == "m") {
            formula.textContent = "M = C + J";
            soma = c+j;
            desenvolvimento.textContent = "M =" +c+"+"+j+" -- > "+soma;
        }
        if (selectjs.value == "j") {
            formula.textContent = "J = C * i * t";
            desenvolvimento.textContent = "J = " + c +" * "+i+" * "+t+" --> "+c*i*t;
        }
        if (selectjs.value == "i") {
            formula.textContent = "J = C * i * t";
            desenvolvimento.textContent = j+" = "+c+" * i * "+t+" --> "+c*t+"i = "+j+" --> i = "+j+"/"+c*t+" -- > i = "+j/(c*t)+" --> "+(j/(c*t))*100+"%";
        }
        if (selectjs.value == "c") {
            formula.textContent = "J = C * i * t";
            desenvolvimento.textContent = j+" = C * "+i+" * "+t+" -- > "+i*t+"C = "+j+" -- > C = "+j+"/"+(i*t)+" -- > "+j/(i*t);
        }
        if (selectjs.value == "t") {
            formula.textContent = "J = C * i * t";
            desenvolvimento.textContent = j+" = "+c+" * "+i+" * t -- > "+c*i+"t = "+j+" -- > t = "+j+"/"+c*i+" -- > t = "+j/(c*i);
        }
        contem.appendChild(formula);
        contem.appendChild(desenvolvimento);
    }
}