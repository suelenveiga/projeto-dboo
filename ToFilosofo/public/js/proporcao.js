const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

vetor = new Array(4);
let selectProporcao = document.getElementById('selectProporcao');
selectProporcao.addEventListener('change', function(){
    let valor = this.value;
    console.log(valor);
    document.getElementById("oculta").style.display = "block";

    for (var i = 1; i < 4; i++) {
        document.getElementById("oculta").style.display = "block";        
        document.getElementById("labelx1").style.display = "block";
        document.getElementById("labelx2").style.display = "block";
        document.getElementById("labely3").style.display = "block";
        document.getElementById("labely4").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x1").type="number";
        document.getElementById("x2").type="number";
        document.getElementById("y1").type="number";
        document.getElementById("y2").type="number";
        if (valor == "x"+i) {
            console.log("entou");
            document.getElementById("x"+i).style.display="none";
            return document.getElementById("labelx"+i).style.display="none"; 
        }
        if (valor == "y"+i) {
            document.getElementById("y"+i).style.display="none";
            if (valor == "y1") {
                return document.getElementById("labely3").style.display="none"; 
            }else{
                return document.getElementById("labely4").style.display="none"; 
            }
        }
        else{
            document.getElementById("oculta").style.display="none";
        }
    }
});

form.addEventListener('submit', function(e) {
    document.getElementById('contem').innerHTML = "";           
    let valorx1 = document.getElementById('x1').value;
    let valory1 = document.getElementById('y1').value;
    let valorx2 = document.getElementById('x2').value;
    let valory2 = document.getElementById('y2').value;
    let classProporcao = new Proporcao (valorx1,valory1,valorx2,valory2);
    e.preventDefault();
});

class Proporcao {
    constructor (valorx1,valory1,valorx2,valory2,valor){
        let html="";
        let conta = "";
        let contaaux = 0;
        let ponto = 0
        let quantosn = 0;
        this.valor = selectProporcao.value;
        this.valorx1 = parseFloat(document.getElementById('x1').value);
        this.valory1 = parseFloat(document.getElementById('y1').value);
        this.valorx2 = parseFloat(document.getElementById('x2').value);
        this.valory2 = parseFloat(document.getElementById('y2').value);
        vetor = ["x1","x2","y1","y2"];
        let p1 = document.createElement('P');
        let p2 = document.createElement('P');
        let p3 = document.createElement('P');
        let p4 = document.createElement('P');
        let p5 = document.createElement('P');
        let p6 = document.createElement('P');
           if (this.valor == "x1") {               
                p1.textContent = "x - - - - "+this.valory1;
                p2.textContent = this.valorx2+" - - - - "+this.valory2;  
                p3.textContent = this.valory2+"x = "+this.valorx2 * this.valory1;
                p4.textContent = "x = "+this.valorx2 * this.valory1+"/"+this.valory2;
                conta = (this.valorx2 * this.valory1)/this.valory2;          
            }
            if (this.valor == "y2") {
                console.log("valorx1 "+this.valorx1);                              
                p1.textContent = this.valorx1+" - - - - "+this.valory1;
                p2.textContent = this.valorx2+" - - - - x";  
                p3.textContent = this.valorx1+"x = "+this.valory1 * this.valorx2;
                p4.textContent = "x = "+this.valory1 * this.valorx2+"/"+this.valorx1;
                conta = (this.valorx2 * this.valory1)/this.valorx1;
            }
            if (this.valor == "y1") {
                console.log("valory1 "+this.valory1);
                p1.textContent = this.valorx1+" - - - - x";
                p2.textContent = this.valorx2+" - - - - "+this.valory2;  
                p3.textContent = this.valorx2+"x = "+this.valorx1 * this.valory2;
                p4.textContent = " x = "+this.valorx1 * this.valory2+"/"+this.valorx2;
                conta = ((this.valorx1 * this.valory2)/this.valorx2);
            }           
            if (this.valor == "x2") {
                console.log("valory1 "+this.valory1);
                p1.textContent = this.valorx1+" - - - - "+this.valory1;
                p2.textContent = "x - - - - "+this.valory2;  
                p3.textContent = this.valory1+"x = "+this.valorx1 * this.valory2;
                p4.textContent = "x = "+this.valorx1 * this.valory2+"/"+this.valory1;
                conta = (this.valorx1 * this.valory2)/this.valory1;
            }           
            contaaux = conta.toString();
            ponto = contaaux.indexOf(".");
            quantosn = (contaaux.length -1)-ponto;
            if (quantosn>=5 && ponto!=-1) {
                p5.textContent = conta.toFixed(5);                         
            }
            if (quantosn<=4){
                p5.textContent = conta;                            
            }
            contem.appendChild(p1);
            contem.appendChild(p2);
            contem.appendChild(p3);
            contem.appendChild(p4);
            contem.appendChild(p5);         
    }
}
