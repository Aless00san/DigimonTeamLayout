//Script for handling all the backend of the webapp

//This function is called whenever the add size button is pressed
//It should handle adding size to the table, handling new rows if needed
//And updating the Size text
function addSize() {
    var sizeText = document.getElementById("sizeText");
    var actualSize = getActualSize(sizeText);
    document.getElementById("sizeText").innerText = "Size: "+parseInt(actualSize+1);
}

//This function is called whenever the substract size button is pressed
//It should handle removing size to the table, handling removing rows if needed
//And updating the Size text
function substractSize() {
    var sizeText = document.getElementById("sizeText");
    var actualSize = getActualSize(sizeText);
    if (actualSize <= 0) actualSize = 1; //Safety Check
    document.getElementById("sizeText").innerText = "Size: "+parseInt(actualSize-1);
}


//function that retrieves actualSize
function getActualSize(sizeText) {
    return parseInt(sizeText.innerText.substring(5));
}

//TODO: UpdateRows function called after buttonPress