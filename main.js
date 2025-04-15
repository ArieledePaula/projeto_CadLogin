// Implementa acesso para a tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

// Implementar estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor preeencher todos os campos");
    }else{
       window.location.href = "cadastro.html";
    }
}