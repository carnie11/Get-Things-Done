let header = document.getElementById("header");
let mitten = document.getElementById("mitten");
let footer = document.getElementById("footer");
let container = document.getElementById("container");


header.innerHTML="To do list";

let grejer = [
    {grejId: 1, name: "äta"},
    {grejId: 2, name: "sova"},
    {grejId: 3, name: "städa"},
];

function printGrejer() {
    container.innerHTML = "";
    let grejLista = document.createElement("div");
    grejLista.setAttribute("id", "lista");
    grejer.map(grej => {

        grejLista.insertAdjacentHTML("afterbegin", "<li>" +grej.name +"</li>")
        })

    container.appendChild(grejLista);
}

printGrejer();

// function please () {
//     let more.document.getElementById("more");
//     for let i = 0; i<Never.length; i++) {
//         let butt=document.createelement("button");
//         butt.innerHTML=never[i];
//         more.appendChild(butt);
//     }
// }

please();


