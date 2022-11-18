//------------------------------------//
//--------GLOBALA_VARIABLER-----------//
//------------------------------------//

let header = document.getElementById("header");
let addATask = document.getElementById("addATask");
let tHead = document.getElementById("tHead");
let taskList = [{Name: "Äta", Btn: "<button></button>"}, 
                {Name: "Sova", Btn: "<button>Done!</button>"}, 
                {Name: "Städa", Btn: "<button>Done!</button>"}, ]
//let buttonList = ["<button>Done!</button>", "<button></button>","<button></button>", ]

//let mitten = document.getElementById("mitten");
//let footer = document.getElementById("footer");
//let container = document.getElementById("container");
//const form = document.getElementById("form");
//const tbody = document.getElementById("tbody");
let tabell = document.getElementById("tabell");


//------------------------------------//
//--------------CLASSES---------------//
//------------------------------------//

header.innerHTML="To do list";

// class doneButton {                  ////////////CLASS FÖR DONE!-BUTTON
//     constructor() {
//         this.value= "Done!";
//         this.addEventListener("click", console.log("Klick på Done!"))  {
//             //////HÄR SKA VI LÄGGA TILL DET SOM SKA HÄNDA NÄR MAN KLICKAR PÅ DONE!-KNAPPEN
//         }
//     }
// }

//------------------------------------//
//--------------FUNKTIONER------------//
//------------------------------------//


for (let i=0; i < taskList.length; i++) {       //////LOOP FÖR ATT FÅ ARRAYEN IN PÅ TABELLEN
    let row = tabell.insertRow(-1);
    let firstNameCell = row.insertCell(-1);
    firstNameCell.appendChild(document.createTextNode(taskList[i].Name));

    // let lastNameCell = row.insertCell(-1);
    // lastNameCell.appendChild(document.createElement(taskList[i].Btn));
}


function onAddATask(e) {            ////FUNKTION FÖR DET SOM SKA HÄNDA NÄR MAN LÄGGER TILL TASKS PÅ LISTAN        
    e.preventDefault();             
    let nyttTask = form.value;
    let nyRad = document.createElement("tr");   ////SKAPAR NY RAD OCH LÄGGER IN INPUTET
    tHead.appendChild(nyRad);
    nyRad.innerHTML=nyttTask;

    let nyCell = document.createElement("td");  ////SKAPAR EN NY DONE!-BUTTON BREDVID DET TILLAGDA INPUTET
    nyRad.appendChild(nyCell);
    nyCell.innerHTML= "<button>Done!</button>";
}



addATask.addEventListener("click", onAddATask);

