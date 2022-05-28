function cssVar(name, value) {
    // console.log(value)
    if (name[0] != '-') name = '--' + name //allow passing with or without --
    if (value) document.documentElement.style.setProperty(name, value)
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}


setTimeout(runonload, 200)

function runonload() {
    document.getElementById("bg1").value = cssVar("--hue")

    document.getElementById("bg2").value = cssVar("--hueComp")
    document.getElementById("bg3").value = cssVar("--hueAscent")


    document.getElementById("text-color-light").value = cssVar("--huetextlight")


    document.getElementById("text-color-dark").value = cssVar("--huetextdark")


    document.getElementById("text-font-size").value = cssVar("--body-font-size") / 16.0



    // document.getElementById("FontSelect").value = cssVar("--font-h2")


    // var colorConfig = [cssVar("--hue"), cssVar("--hueComp"), cssVar("--hueAscent"), cssVar(--huetextlight), cssVar(--huetextdark), cssVar(--bodyFontSize)]
    // alert(colorConfig)



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
        changeBodyFont()
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
    closecustomizer()
}



function changeBodyFont() {
    var fontselecteled = document.getElementById("FontSelect").value
    document.body.style.fontFamily = fontselecteled
    var all_headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
    for (i = 0; i < all_headings.length; i++) {
        cssVar("--font-h2", `"${fontselecteled}";`)
        all_headings[i].style.fontFamily = fontselecteled
    }
}

function closecustomizer() {
    document.getElementById("Customizer").style.display = "none";
    document.getElementById("app").style.gridTemplateColumns = '1fr'
    // document.getElementById("showCustomizer").onclick = "showCustomizer"

}

function showCustomizer() {
    document.getElementById("Customizer").style.display = "inline-grid";
    document.getElementById("app").style.gridTemplateColumns = 'minmax(300px, 1fr) 3fr'
    // document.getElementById("showCustomizer").onclick = "closecustomizer()"

}

