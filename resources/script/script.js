// let listarFiltrarWerCase().includes(busca.tolower()strim())
//     compra.tolower
// )
// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);

let users = ["Pedro","Ana","Joana","Diego","Davi Messias","Cristiano","Pedro Renan","Pedro","Paula","Zacarias"];

let searchUser = prompt("Digite o nome do usuário que deseja buscar:");

// Lembrando que, meu usuário adm não pode mandar em branco a busca. Chamamos isso de tratativa de erros.

if(searchUser === ""){
    console.log("Não pode enviar em branco");
}
else{
    // Retorna o usuário que for encontrado 
    let user = users.find(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );
    // Devemos tratar também caso a busca não retorne nenhum resultado

    if (user === undefined){
        // Usuário não encontrado
        console.log("User not found");
        users.push(searchUser);
        console.log(users)
    }
    
    else{
        console.log("usuário encontrado: ".concat(user));
        // Buscar índice do usuário 
        let index = users.indexOf(user);
        // excluir o elemento 
        // users.splice(index,1,"Emilly")
        // console.log(users)
        // Atualizar o valor:
        
        //  listagem dos itens
        users.forEach(element => {
             //read
        console.log(user)
        });
    
    }

}
