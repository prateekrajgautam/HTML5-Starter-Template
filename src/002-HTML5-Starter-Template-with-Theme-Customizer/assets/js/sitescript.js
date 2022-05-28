// To toggle menu on click
window.addEventListener("load", () => {
    setTimeout({
        var toggle = document.getElementsByClassName('toggle')[0]
            // toggle.classList.add("active")
            toggle.addEventListener("click", toggleItems)
            var codeblocks = document.getElementsByClassName('code')
            for(i = 0; i<codeblocks.length; i++) {
        addCopyfunction(codeblocks[i])
    }
    codeblocks = document.getElementsByTagName('code')
    for (i = 0; i < codeblocks.length; i++) {
        addCopyfunction(codeblocks[i])
    }
    codeblocks = document.getElementsByTagName('pre')
    for (i = 0; i < codeblocks.length; i++) {
        addCopyfunction(codeblocks[i])
    }
}, 200)
}
)

function toggleItems() {
    var items = document.getElementsByClassName("nav-items")
    for (i = 0; i < items.length; i++) {
        var toggle = document.getElementsByClassName('toggle')[0]
        toggle.classList.toggle('active')
        items[i].classList.toggle('active')
        // items[i].addEventListener("click", toggleItems)
    }
}


// Click to copy
function addCopyfunction(c) {
    // c.append(gen(span, '', "", 'copyIcon'))
    c.addEventListener('click', (e) => {
        var copyText = e.target.innerText
        // console.log(copyText)
        navigator.clipboard.writeText(copyText)

    })
}