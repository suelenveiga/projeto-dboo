const contem = document.getElementById('contem');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

let tem = 0;
form.addEventListener('submit', function(e) {
    document.getElementById('contem').innerHTML = "";               
    valorx = parseInt(document.getElementById('x').value);
    valory = parseInt(document.getElementById('y').value);
    let razao = new Razao(valorx,valory) ;
    e.preventDefault();
});
class Razao {
    constructor(valorx,valory) {
        let x = valorx;
        let y = valory;
        console.log(valorx);
        
        let html="x = "+x+"/"+y+"";
        this.maior = Math.max(x,y);
        this.menor = Math.min(x,y);        
        let p = document.createElement("P");
        if ( x == y || x%y == 0) {
           html += " = "+this.maior/this.menor;
           console.log(this.maior/this.menor);
        }
        else{
            for (var i = 2;i <= valorx; i++){
                tem = 0;
                while(tem == 0){
                    if(x%i == 0 && y%i == 0){
                        x = x/i;
                        y = y/i;
                        html += " = "+x+"/"+y;                        
                        tem = 0;
                    }
                    else {
                        console.log(1);
                        tem = 1;
                    }
                }
            }
        }

        p.textContent = html;
        contem.appendChild(p);
    }
}

