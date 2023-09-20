//Script for handling all the backend of the webapp

//This function is called whenever the add size button is pressed
//It should handle adding size to the table, handling new rows if needed
//And updating the Size text
function addSize() {
    var actualSize = getActualSize(sizeText);
    document.getElementById("sizeText").innerText = "Size: " + parseInt(actualSize + 1);
    checkColumnsUpdated();
}

//This function is called whenever the substract size button is pressed
//It should handle removing size to the table, handling removing rows if needed
//And updating the Size text
function substractSize() {
    var actualSize = getActualSize(sizeText);
    if (actualSize <= 0) actualSize = 1; //Safety Check
    document.getElementById("sizeText").innerText = "Size: " + parseInt(actualSize - 1);
    checkColumnsUpdated();
}


//function that retrieves actualSize
function getActualSize(sizeText) {
    var sizeText = document.getElementById("sizeText");
    return parseInt(sizeText.innerText.substring(5));
}

//This function checks if columns needed to be updated acording to size
function checkColumnsUpdated() {
    var actualSize = getActualSize();
    var even = true;
    var columns = 2;
    if (actualSize % 2 != 0) { //odd number
        var aux = parseFloat(actualSize / 2);
        columns = aux + 0.5;
        even = false;
    } else { //even number
        columns = actualSize / 2;
    }
    updateColumns(columns, even);
}

//This function is called everyTime the size buttons are interacted
function updateColumns(columns, even) {
    var table = document.getElementById("digimons");
    table.innerHTML = createTable(columns, even);
}

//This function creates the HTML tags for our table according to columns and rows needed
function createTable(columns, even) {
    var tableHtml = "";
    //ROW1
    tableHtml += "<tr>"
    for (var j = 0; j < columns; j++) {
        tableHtml += "<th><img src='Digitama.jpg'>???</th>";
    }
    tableHtml += "</tr>"
    //ROW2
    if (!even) columns = columns - 1;
    for (var j = 0; j < columns; j++) {
        tableHtml += "<th><img src='Digitama.jpg'>???</th>";
    }
    return tableHtml;
}
