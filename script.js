//------------------------------------//
//--------GLOBALA_VARIABLER-----------//
//------------------------------------//

let header = document.getElementById("header");
let addATask = document.getElementById("addATask");
let tHead = document.getElementById("tHead");
let taskList = ["Äta", "Sova", "Städa", ]
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

// class doneButton {                           //CLASS FÖR DONE!-BUTTON
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


for (let i=0; i < taskList.length; i++) {       //LOOP FÖR ATT FÅ ARRAYEN IN PÅ TABELLEN + LÄGGA TILL EN KNAPP
    let row = tabell.insertRow(-1);
    let firstNameCell = row.insertCell(-1);
    firstNameCell.appendChild(document.createTextNode(taskList[i]));
    firstNameCell.insertAdjacentHTML("afterend",  "<button id='btn1' class='doneButton'></button>");
    
}

// //////////////LOCAL STORAGE///////////////
// if (localStorage.getItem("nyttTask")) {
//     console.log("Det finns LS");}else {
//         console.log("Det finns inget LS");

//         let taskList = ["Äta", "Sova", "Städa", ];
//         localStorage.setItem("nyttTask", JSONstringify(nyttTask));
//         console.log(localStorage);
//     }







function onAddATask(e) {                         //FUNKTION FÖR DET SOM SKA HÄNDA NÄR MAN LÄGGER TILL TASKS PÅ LISTAN        
    e.preventDefault(); 
    let nyttTask = form.value;
    let nyRad = document.createElement("tr");   //SKAPAR NY RAD OCH LÄGGER IN INPUTET + 
    tHead.appendChild(nyRad);
    nyRad.innerHTML=nyttTask;
    taskList.push(nyttTask);                    //PUSHAR INPUT TILL TASKLIST-ARRAYEN
    console.log(taskList);

    let nyCell = document.createElement("td");  //SKAPAR EN NY DONE!-BUTTON BREDVID DET TILLAGDA INPUTET
    nyRad.appendChild(nyCell);
    nyCell.innerHTML= "<button id='id=taskList.length +1' class='doneButton'></button>";
    
   // let newBtn = nyCell.innerHTML= "<button>Done!</button>";
    //newBtn.style.border = "1px solid black";

}



addATask.addEventListener("click", onAddATask);

