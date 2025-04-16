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

// Criando variável do tipo array - vazio
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Favor informar um nome para cadastro")
    }
}

//Função para preencher a lista de cadastro
function criaLista(){
    let tabela = "<tr><td>Nome</td><td>Ações</td></tr>";
    for(let i =0;i<=(dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-dark' onclick= ''>Editar</button><button class='btn btn-danger' onclick= 'excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//Função para excluir nome da lista
function excluir(i){
    dadosLista.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);
    console.log(i);
}