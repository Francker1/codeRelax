
const changeColor = (e) => {

    const active = document.querySelectorAll("span.active");

    active.forEach((item) => {

        item.classList.remove("active");
    })

    e.target.classList.add("active");
}

//Get click in all elements
document.querySelectorAll('.change-color').forEach(item => {

    item.addEventListener('click', event => {
      
      changeColor(event)
    })
})