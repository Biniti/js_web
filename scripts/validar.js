//vamos validar nossa pagina de login
//para isso precisamos verificar se o  username e a senha são validas e estão cadastradas no nosso banco
//ao clicar no botão enviar, vamos receber em uma função e nessa fução faremos a verificação


//criarei uma lista de objetos para servir como um exemplo de banco

var teste = [
    {"login": "teste", "password": "123"},
    {"login": "teste2", "password": "123"},
    {"login": "teste3", "password": "123"},
];


function login(){

 var user = document.getElementsByName('username')[0].value.toLowerCase();
 var senha = document.getElementsByName('password')[0].value;

 for (usuarios in teste){
     var us = teste[usuarios];

     if(us.login === user && us.password === senha){
        window.location.href = 'consulta.html';
        return false;
    }
 };
 alert("Dados incorretos, tente novamente.");
 return false;
 

};