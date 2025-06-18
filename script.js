alert("Olá mundo!");

//Uma variável guarda algum valor temporariamente
//Entrada dos dados
var nome = "Valdecir";
var idade = 45;
var senha = "123";

//Alterado NO GIT
//estrutura de condição
if(idade > 17){
    alert("Pode votar! "+ nome);
} else{
    alert("Vai embora daqui! "+ nome);
}

if(nome == "Valdecir" && senha =="123"){
    alert("Login concedido! "); 
}else{
    alert("Tente Novamente! seu intruso!");
}

//laço de repetção
contador = 0;
while(contador < 100){
    contador = contador + 1;
    console.log(contador);
}


var celular = document.querySelector(".celular"); //icone de menu
var listamenu = document.querySelector(".menu ul");//itens do menu

celular.addEventListener("click", function(){ 
    listamenu.classList.toggle("mostrarMenu");
 });

