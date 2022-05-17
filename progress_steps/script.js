const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    /* actives.length = 1 až 4 
       circles.length = 4 
    
    Potřebujeme ale od obou length odečíst 1, protože progress(bar) má jen tři části.
    Následně vynásobíme 100, abychom získali celá čísla a musíme přidat %, abychom získali použitelný údaj pro nastavení šířky.     

    */

    const actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + "%")

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}