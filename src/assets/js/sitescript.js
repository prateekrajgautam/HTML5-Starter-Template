// to toggle menu on click
window.addEventListener("load", function () {
    var toggle = document.getElementsByClassName('toggle')[0]
    toggle.addEventListener("click", toggleItems)

})

function toggleItems() {
    var items = document.getElementsByClassName("items")
    for (i = 0; i < items.length; i++) {
        var toggle = document.getElementsByClassName('toggle')[0]
        toggle.classList.toggle('active')
        items[i].classList.toggle('active')
        items[i].addEventListener("click", toggleItems)
    }
}

;
