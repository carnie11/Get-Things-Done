let header = document.getElementById("header");
let mitten = document.getElementById("mitten");
let footer = document.getElementById("footer");
let container = document.getElementById("container");
let addATask = document.getElementById("addATask");
let tHead = document.getElementById("tHead");
const form = document.getElementById("form");
const tbody = document.getElementById("tbody");
let tabell = document.getElementById("tabell");




header.innerHTML="To do list";

class doneButton {                  ////////////CLASS FÖR DONE!-BUTTON
    constructor() {
        this.value= "Done!";
        this.addEventListener("click", console.log("Klick på Done!"))
    }
}

function onAddATask(e) {
    e.preventDefault();             ////SKAPA NY RAD OCH LÄGG IN INPUTET
    let nyttTask = form.value;
    let nyRad = document.createElement("tr");
    tHead.appendChild(nyRad);
    nyRad.innerHTML=nyttTask;

    let nyCell = document.createElement("td");  ////SKAPAR EN NY BUTTON BREDVID DET TILLAGDA INPUTET
    nyRad.appendChild(nyCell);
    nyCell.innerHTML= "<button>Done!</button>";


}

addATask.addEventListener("click", onAddATask);






