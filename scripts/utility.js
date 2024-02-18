let discountPrice =0;
function removeBackgroundByElement(element) {
    // const element = document.getElementById(element);
    element.classList.remove("bg-[#1DD100]");
}
function setBackgroundByElement(element) {
    // const element = document.getElementsByName(elementID);
    element.classList.add("bg-[#1DD100]");
}
function getNumberById(elementID) {
    const element  = document.getElementById(elementID);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}
function setNumberById(elementID, value) {
    const element  = document.getElementById(elementID);
    element.innerText = value;
}
function makeItFlexByContainer(element) {
    element.classList.add('flex');
    element.classList.add('justify-between');   
}
function makeButtonAble(elementID) {
    document.getElementById(elementID).disabled = false;
}

function enteredCoupon(elementID) {
    const element = getElementById(elementID);
    const elementText = element.value;
    console.log(elementText);
}

function checkValid() {
    const x = document.getElementById('input-coupon').value;
    if(x === "NEW15" || x === "Couple 20"){
        const disCountPart = document.getElementById('discount-amount');
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        h1.innerText = "Discount Price";
        if(x=== "NEW15") {
            discountPrice =  parseFloat(fare * .15); 
        }
        else {
            discountPrice = parseFloat(fare * .20);
        }
        h2.innerText = "BDT " + discountPrice;
        disCountPart.appendChild(h1);
        disCountPart.appendChild(h2);
        document.getElementById('grand-price').innerText = fare - discountPrice;
        document.querySelector('#coupon-div').classList.add("hidden");


    }
    else{
        alert("Coupon code INVALID!!!!!!!!!!Enter the right coupon code");
        document.getElementById('input-coupon').value = "";
    }
}

function removeAllChildren(parentID) {
    var parent = document.getElementById(parentID);
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

// function removeAllowCursorById() {
//     const element = document.querySelector(elementID);
//     element.classList.remove('cursor-not-allowed');
// }