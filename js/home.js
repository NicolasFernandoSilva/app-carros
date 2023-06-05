const URL_API = "https://3d39e0fe-47ea-498c-bd8c-cef3f519d18f.mock.pstmn.io/veiculos"


let veiculos = document.querySelector("#veiculos");
let tableBody = document.querySelector("#table-body");

async function fetchApi(){
    let req = await fetch(URL_API)
    let resp = await req.json();
    console.log(resp);
    resp.forEach((element) => {
    let veiculo = document.createElement("tr");
    veiculo.innerHTML = `<th scope="row">${element.fabricante}</th>
    <td>${element.modelo}</td>
    <td>${element.ano}</td>
    <td>${element.placa}</td> 
    `
    tableBody.appendChild(veiculo);
})
}

fetchApi(); 
