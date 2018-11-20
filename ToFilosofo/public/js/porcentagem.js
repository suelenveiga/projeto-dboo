const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');



form.addEventListener('submit', function(e) {
    contem.innerHTML = "";
    let porcent = document.getElementById("porcent").value;
    let de = document.getElementById("de").value;    
    document.getElementById('contem').innerHTML = "";          
    let classPorcentagem = new Porcentagem(porcent,de);
    
    e.preventDefault();
});

class Porcentagem {
    constructor(porcent,de){
        const p1 = document.createElement("P");
        const p2 = document.createElement("P");
        const p3 = document.createElement("P");
        p1.textContent = " x = ("+porcent+"/100) * "+de;
        p2.textContent = (porcent/100)+" * "+de;
        p3.textContent = "x = "+(porcent/100)*de+"%";
        contem.appendChild(p1); 
        contem.appendChild(p2);
        contem.appendChild(p3);
    }
}
