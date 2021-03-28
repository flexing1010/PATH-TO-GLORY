const addBtn = document.querySelector("#addRow");
let timePeriod = document.querySelectorAll(".timeperiod");


const table = document.querySelector(".timeTable");

//
timePeriod.forEach((timeBar) => {
    timeBar.addEventListener("click", (e) => {
        const div = document.createElement("div");
        div.id = "timeBar";
        //pointing specific element among "array" of elements//
        e.target.appendChild(div);
     // force eventlistner to work only one time   
  }, {once : true});
});

function clickHandler(e) {
    const div = document.createElement("div");
    div.id = "timeBar";
    
    e.target.appendChild(div);
}

function addRow() {
    const copyRow = document.querySelector(".hiddenTB");
    const copy = copyRow.cloneNode(true);
    copy.classList.remove("hiddenTB");
    table.appendChild(copy);

    copy.addEventListener("click", clickHandler);
 
   
    
    
}





/*function addRow() {
    let table = document.querySelector("table");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let colCount = table.rows[0].cells.length;

    for(var i=0; i< 48; i++){
        let newcell = row.insertCell(i);
        
        newcell.inneHTML = table.rows[0].cells[i].innerHTML;
        newcell.className= "timePeriod";
    }

} */


