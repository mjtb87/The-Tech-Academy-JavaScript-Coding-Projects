function getReceipt() {
    var text1 = "<h3></h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
            }
            console.log(selectedSize)
    }
    if (selectedSize === "personal pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "medium pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "large pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "extra large pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1); 
}
function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");

    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal +meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+ runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getVeggie(runningTotal,text1);
};
function getVeggie(runningTotal,text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");

    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            console.log("selected veggie item: ("+veggieArray[k].value+")");
            text1 = text1+veggieArray[k].value+"<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal +veggieTotal);
    console.log("total selected veggie items: "+veggieCount);
    console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+ runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getCrust(runningTotal,text1);
};
function getCrust(runningTotal,text1){
    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crust");

    for (var l = 0; l < crustArray.length; l++) {
        if (crustArray[l].checked) {
            selectedCrust.push(crustArray[l].value);
            console.log("selected crust item: ("+crustArray[l].value+")");
            text1 = text1+crustArray[l].value+"<br>";
        }
    }
    var crustCount = selectedCrust.length;
    if (selectedCrust == "cheese stuffed crust") {
        crustTotal = 3;
    } 
    runningTotal = (runningTotal +crustTotal);
    console.log("total selected crust items: "+crustCount);
    console.log(crustCount+" crust = "+"$"+crustTotal+".00");
    console.log("crust text1: "+text1);
    console.log("Purchase Total: "+"$"+ runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getSauce(runningTotal,text1);
}
function getSauce(runningTotal,text1){
    var sauceTotal = 0;
    var selectedSauce = [];
    var sauceArray = document.getElementsByClassName("sauce");

    for (var m = 0; m < sauceArray.length; m++) {
        if (sauceArray[m].checked) {
            selectedSauce.push(sauceArray[m].value);
            console.log("selected sauce item: ("+sauceArray[m].value+")");
            text1 = text1+sauceArray[m].value+"<br>";
        }
    }
    var sauceCount = selectedSauce.length;
    runningTotal = (runningTotal +sauceTotal);
    console.log("total selected sauce item: "+sauceCount);
    console.log(sauceCount+" sauce = "+"$"+sauceTotal+".00");
    console.log("sauce text1: "+text1);
    console.log("Purchase Total: "+"$"+ runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getCheese(runningTotal,text1)
}
function getCheese(runningTotal,text1){
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheese");

    for (var n = 0; n < cheeseArray.length; n++) {
        if (cheeseArray[n].checked) {
            selectedCheese.push(cheeseArray[n].value);
            console.log("selected cheese item: ("+cheeseArray[n].value+")");
            text1 = text1+cheeseArray[n].value+"<br>";
        }
    }
    var cheeseCount = selectedCheese.length;
    if (selectedCheese == "extra cheese") {
        cheeseTotal = 3;
    } 
    runningTotal = (runningTotal +cheeseTotal);
    console.log("total selected crust items: "+cheeseCount);
    console.log(cheeseCount+" cheese = "+"$"+cheeseTotal+".00");
    console.log("cheese text1: "+text1);
    console.log("Purchase Total: "+"$"+ runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}

function Cancel(){
    document.getElementById("showText").innerHTML="";
    document.getElementById("totalPrice").innerHTML="";
}