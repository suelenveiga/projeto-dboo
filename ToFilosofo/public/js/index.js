const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();

const linkLogin = document.querySelector('div.naologado a');
const linkLogout = document.querySelector('div.logado a');
const avatar = document.querySelector('div.logado img');
const nome = document.querySelector('div.logado span');
const divLogado = document.querySelector('div.logado');
const divNaoLogado = document.querySelector('div.naologado');
const form = document.querySelector('form');
const divAvisos = document.querySelector('div.avisos');

document.getElementById('alert').style.display = "none";
let logado = "nao";
linkLogout.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        logado="nao";
        usuario = null;
        divLogado.style.display = 'none';
        divNaoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    });
});

linkLogin.addEventListener('click', function() {
    firebase.auth().signInWithRedirect(provider).then(function(user) {
        if (user) {
            usuario = user;
            logado = "sim";
            divLogado.style.display = 'block';
            divNaoLogado.style.display = 'none';
            avatar.src = user.photoURL;
            nome.textContent = user.displayName;
        } else {
            usuario = null;
            logado = "nao";                          
            divLogado.style.display = 'none';
            divNaoLogado.style.display = 'block';
            avatar.src = '';
            nome.textContent = '';
        }
    }).catch(function(erro) {
        alert("Falha ao realizar o login");
    });
});

let usuario = null;
form.addEventListener('submit', function(e) {
    document.getElementById('alert').style.display = "block";    
    if (logado == "sim") {
        window.location.href = "home.html";
    }
    else{
        document.getElementById('alert').innerHTML = "Clique em login com o google";
    }
    e.preventDefault();
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        logado = "sim";
        usuario = user;
        divLogado.style.display = 'block';
        divNaoLogado.style.display = 'none'; 
        avatar.src = user.photoURL;
        nome.textContent = user.displayName;    
    } else {
        logado = "nao";        
        usuario = null;
        divLogado.style.display = 'none';
        divNaoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    }
});
