let saludo= () => {
    console.log("Hola a todos");
}


let onmouseoverTest =() =>{
    console.log("Disparo onmouseover");
}


let onmouseoutTest =() =>{
    console.log("Disparo onmouseout");
}
function addTable(multiplier) {
    var myTableDiv = document.getElementById("myDynamicTable");  
    var table = document.createElement('TABLE');
    table.border = '1';
    var tableTitle = document.createElement('TH');
    tableTitle.innerText = "Tabla del " + multiplier ;
    table.appendChild(tableTitle);
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);  
    for (var i = 1; i <= 10; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);  
      for (var j = 1; j <= 1; j++) {
        var td = document.createElement('TD');
        td.width = '300';
        td.appendChild(document.createTextNode(multiplier + "X" + i + "=" + (i*multiplier)));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  } 
  document.getElementById("botonMultiplicador").onclick = function(multiplier){
  addTable(multiplier);
  }