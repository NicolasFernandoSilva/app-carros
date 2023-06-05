const URL_API = "https://3d39e0fe-47ea-498c-bd8c-cef3f519d18f.mock.pstmn.io/veiculos"
let listGroup = document.querySelector("#vehicle-list");
let deleteBtn = document.querySelector("#btn-delete")

console.log(listGroup);

async function fetchApi(){
    let req = await fetch(URL_API)
    let resp = await req.json();
    resp.forEach((element) => {
        let veiculo = document.createElement("button");
        veiculo.classList.add("list-group-item");
        veiculo.classList.add("list-group-item-action");
        veiculo.setAttribute("data-bs-toggle", "modal");
        veiculo.setAttribute("data-bs-target", "#exampleModal");
        veiculo.innerHTML = `
        Placa: ${element.placa} / Modelo: ${element.modelo} / Ano: ${element.ano}
     `
        veiculo.addEventListener("click", () => {
           let modalContent = document.querySelector("#modal-content")
           modalContent.innerHTML = `Placa: ${element.placa} / Modelo: ${element.modelo} / Ano: ${element.ano}`
           let modalFooter = document.createElement("div")
           modalFooter.classList.add("modal-footer")
           let modalFooterBtnDelete = document.createElement("button");
           modalFooterBtnDelete.classList.add("btn");
           modalFooterBtnDelete.classList.add("btn-danger");
           modalFooterBtnDelete.innerText = "Deletar"
           modalFooter.appendChild(modalFooterBtnDelete);
           modalFooterBtnDelete.onclick = () => {
            fetchDelete(element.placa)
           }
           modalContent.appendChild(modalFooter);
        })
        listGroup.appendChild(veiculo);
    })

}

fetchApi();

async function fetchDelete(placa){
    let req = await fetch(`https://3d39e0fe-47ea-498c-bd8c-cef3f519d18f.mock.pstmn.io/veiculo?placa=${placa}`, {
        method: "DELETE"
    })
    let resp = await req.json();
    console.log(resp);
}



