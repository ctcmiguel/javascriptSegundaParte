/*let saludo= () => {
    console.log("Hola a todos");
}
let onmouseoverTest =() =>{
    console.log("Disparo onmouseover");
}
let onmouseoutTest =() =>{
    console.log("Disparo onmouseout");
}*/
let addTable = (multiplier) => {
  let myTableDiv = document.getElementById("myDynamicTable");  
    let table = document.createElement('TABLE');
    table.border = '1';
    let tableTitle = document.createElement('TH');
    tableTitle.innerText = "Tabla del " + multiplier ;
    table.appendChild(tableTitle);
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);  
    for (let i = 1; i <= 10; i++) {
      let tr = document.createElement('TR');
      tableBody.appendChild(tr);  
      for (let j = 1; j <= 1; j++) {
        let td = document.createElement('TD');
        td.width = '300';
        td.appendChild(document.createTextNode(multiplier + "X" + i + "=" + (i*multiplier)));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }  
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
      addTable(multiplier);
  }