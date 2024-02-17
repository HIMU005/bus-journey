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
// function removeAllowCursorById() {
//     const element = document.querySelector(elementID);
//     element.classList.remove('cursor-not-allowed');
// }