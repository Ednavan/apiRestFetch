async function getUsers(){
    let url = 'http://localhost:3000/produtos';
    try{
        let res = await fetch(url);
        return await res.json();

    }catch (error) {
        console.log(error);
    }

}


function criaLinha(usuario){
    // console.log(usuario);
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDescricao = document.createElement("td");

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.nome;
    tdDescricao.innerHTML = usuario.descricao;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDescricao);


    return linha;
}


async function renderUsers() {
    let data = await getUsers();

    let tabela = document.getElementById("tabela");

    data.forEach(element => {
        let linha = criaLinha(element);
        
        tabela.appendChild(linha);
        
    });
    console.log(data)
    console.log(tabela)
 

}

renderUsers();

