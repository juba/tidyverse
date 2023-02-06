function slide_soluce(el) {
    if (!el.classList.contains('shown')) {
        let height = el.clientHeight + "px";
        el.style.height = height;
    } else {
        el.style.height = '0px';

        container.addEventListener('transitionend', function () {
            container.classList.remove('active');
        }, {
            once: true
        });
    }
}


document.querySelectorAll(".solution-exo").forEach(box => {

    const soluce_link = document.createElement("p");
    soluce_link.classList.add("solution-link");
    const soluce_link_a = document.createElement("button");
    soluce_link_a.setAttribute("type", "button");
    soluce_link_a.setAttribute("class", "btn btn-link");
    soluce_link_a.innerText = "la solution";
    soluce_link.appendChild(soluce_link_a);

    box.parentNode.insertBefore(soluce_link, box);
    const box_height = box.offsetHeight + "px";
    box.setAttribute("data-exo-height", box_height);
    box.style.height = "0px";
    box.style["transition-duration"] = ".5s";

    soluce_link_a.addEventListener("click", function (e) {
        this.classList.toggle("shown");
        box.classList.toggle("shown");
        if (box.classList.contains("shown")) {
            box.style.height = box.getAttribute("data-exo-height");
        } else {
            box.style.height = "0px";
        }
    })

})

