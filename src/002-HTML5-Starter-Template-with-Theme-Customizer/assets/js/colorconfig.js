function cssVar(name, value) {
    var r = document.querySelector(':root')
    var rs = getComputedStyle(r)
    // console.log(value)
    if (name[0] != '-') name = '--' + name //allow passing with or without --
    if (value) r.style.setProperty(name, value)
    return rs.getPropertyValue(name);
}

var themeSliders = document.getElementsByClassName("themeslider")
for (i = 0; i < themeSliders.length; i++) {
    var slider = themeSliders[i]
    slider.addEventListener("input", (e) => {
        cssVar(`--${e.target.id}`, e.target.value)
        document.getElementById(`${e.target.id}Disp`).innerHTML = e.target.value
    })
}


var elem = document.getElementById("fontSize")
elem.oninput = function () {
    var currentValue = this.value
    document.getElementById("fontSizeDisp").innerHTML = currentValue
    cssVar("fontSize", currentValue)
    document.body.style.fontSize = currentValue * 16 + "px"
    changeBodyFont()
}






setTimeout(runonload, 400)

function runonload() {


    var themeSliders = document.getElementsByClassName("themeslider")
    for (i = 0; i < themeSliders.length; i++) {
        var slider = themeSliders[i]
        document.getElementById(`${themeSliders[i].id}Disp`).value = cssVar(`--${themeSliders[i].id}`)
    }











}

if (sessionStorage.getItem("colorConfig") == null) saveTheme()
if (sessionStorage.getItem("colorConfig") != null) {
    var savedConfig = JSON.parse(sessionStorage.getItem("colorConfig"))
    loadColorConfig(savedConfig)
}
function loadColorConfig(inputConfig = JSON.parse(sessionStorage.getItem("colorConfig"))) {
    cssVar("--hue", inputConfig[0])
    cssVar("--hueAscent", inputConfig[1])
    cssVar("--fontsize", inputConfig[2])
    cssVar("--font-body", inputConfig[3])
    changeBodyFont(inputConfig[3])
    closecustomizer()
}




function closecustomizer() {
    document.getElementById("Customizer").style.display = "none";
    document.getElementById("app").style.gridTemplateColumns = '1fr'
    // document.getElementById("showCustomizer").onclick = "showCustomizer"
    saveTheme()
}

function showCustomizer() {
    document.getElementById("Customizer").style.display = "inline-grid";
    document.getElementById("app").style.gridTemplateColumns = 'minmax(300px, 1fr) 3fr'
    // document.getElementById("showCustomizer").onclick = "closecustomizer()"

}

function saveTheme() {
    var colorConfig = [
        cssVar("--hue"),
        cssVar("--hueAscent"),
        cssVar("--fontsize"),
        document.getElementById("FontSelect").value
    ]
    sessionStorage.removeItem("colorConfig")
    sessionStorage.setItem("colorConfig", JSON.stringify(colorConfig))
}

function resetFunction() {
    cssVar("--light", cssVar("--lightDefault"))
    cssVar("--sat", cssVar("--satDefault"))
    cssVar("--hu", cssVar("--hueDefault"))
    localStorage.clear()
    sessionStorage.clear()
    reloadAll()
    loadColorConfig()
}

function changeBodyFont(fontselecteled = document.getElementById("FontSelect").value) {
    document.body.style.fontFamily = fontselecteled
    var all_headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
    for (i = 0; i < all_headings.length; i++) {
        cssVar("--font-body", `"${fontselecteled}";`)
        all_headings[i].style.fontFamily = fontselecteled
    }
}


function darkMode() {
    cssVar("--light", "5%")
    cssVar("--sat", "85%")
}