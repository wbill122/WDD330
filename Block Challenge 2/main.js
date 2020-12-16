//function to calculate concrete
function computeConcrete()
{
    //numbers for concrete volume
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);

    //compute concrete
    var CY = length * width * height;
    var quantity = CY / 27;
    quantity = quantity.toFixed(2);

    localStorage.setItem("TotalQuantity", quantity);
    return quantity;
}
//Displays the total amount of concrete
function displayPay() {
    document.getElementById('output').innerHTML =  computeConcrete() + " Cubic Yard";
}

function getConcrete() {

    // get concrete percentage breakdown
    var cement = parseFloat(document.getElementById('cement').value);
    var caggergate = parseFloat(document.getElementById('caggergate').value);
    var faggergate = parseFloat(document.getElementById('faggergate').value);
    var water = parseFloat(document.getElementById('water').value);
    var air = parseFloat(document.getElementById('air').value);

    var cementPercentage = (cement / 50) * computeConcrete();
    cementPercentage = cementPercentage.toFixed(2);
    localStorage.setItem("AmountTocement", cementPercentage);
    var caggergatePercentage = (caggergate / 50) * computeConcrete();
    caggergatePercentage = caggergatePercentage.toFixed(2);
    localStorage.setItem("AmountToCaggergate", caggergatePercentage);
    var faggergatePercentage = ( faggergate / 50 ) * computeConcrete();
    faggergatePercentage = faggergatePercentage.toFixed(2);
    localStorage.setItem("AmountTofaggergates", faggergatePercentage);
    var waterPercentage = ( water / 50) * computeConcrete();
    waterPercentage = waterPercentage.toFixed(2);
    localStorage.setItem("AmountTowater", waterPercentage);
    var airPercentage = ( air/50 ) * computeConcrete();
    airPercentage = airPercentage.toFixed(2);
    localStorage.setItem("AmountToair", airPercentage);

    document.getElementById('concreteOutput').innerHTML = "Amount of Cement: " + cementPercentage + " tons<br/>" 
                                                        + "Amount of Course Aggergates: " + caggergatePercentage + " Tons<br/>"
                                                        + "Amount of Fine Aggergates: " + faggergatePercentage + " Tons<br/>"
                                                        + "Amount of Water: " + waterPercentage + " Tons<br/>"
                                                        + "Amount of Air Entrainment: " + airPercentage + " Tons<br/>"; 

if (localStorage.getItem("TotalQuantity") === null) {
    localStorage.style.display === "none";
  } else {

document.getElementById("localStorage").innerHTML = "Total Cost of Concrete: $" + localStorage.getItem("TotalQuantity")*(100)  + "<br/>"
                                                    + "Amount to cement: $" + localStorage.getItem("AmountTocement")*(350)+ "<br/>"
                                                    + "Amount to course aggergate: $" + localStorage.getItem("AmountToCaggergate")*(15) + "<br/>"
                                                    + "Amount to fine aggergate: $" + localStorage.getItem("AmountTofaggergates")*(25) + "<br/>"
                                                    + "Amount to water: $" + localStorage.getItem("AmountTowater")*(2) + "<br/>"
                                                    + "Amount to air: $" + localStorage.getItem("AmountToair")*(24);
  }
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}