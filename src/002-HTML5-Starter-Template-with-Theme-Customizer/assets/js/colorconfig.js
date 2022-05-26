

function cssVar(name, value) {
    console.log(value)
    if (name[0] != '-') name = '--' + name //allow passing with or without --
    if (value) document.documentElement.style.setProperty(name, value)
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}
var elem = document.getElementById("bg1")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("bg1disp").innerHTML = currentValue
    cssVar("--hue", currentValue)
}
var elem = document.getElementById("bg2")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("bg2disp").innerHTML = currentValue
    cssVar("--hueComp", currentValue)
}
var elem = document.getElementById("bg3")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("bg3disp").innerHTML = currentValue
    cssVar("--hueAscent", currentValue)
}


var elem = document.getElementById("text-color-light")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("text-color-light-disp").innerHTML = currentValue
    cssVar("--huetextlight", currentValue)
}
var elem = document.getElementById("text-color-dark")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("text-color-dark-disp").innerHTML = currentValue
    cssVar("--huetextdark", currentValue)
}
var elem = document.getElementById("text-font-size")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("text-font-size-disp").innerHTML = currentValue
    cssVar("--body-font-size", currentValue)
    document.body.style.fontSize = currentValue * 16 + "px"
}

function closecustomizer() {
    document.getElementById("Customizer").style.display = "none";
    document.getElementById("app").style.gridTemplateColumns = '1fr'
}

function changeBodyFont() {
    var fontselecteled = document.getElementById("FontSelect").value
    console.log(fontselecteled)
    document.body.style.fontFamily = fontselecteled
    h1.style.fontFamily = fontselecteled
}