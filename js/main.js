/*Mapeamento*/ 
document.querySelector("#sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#min");

    console.log("go to up");
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#habilidaes").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#idades");

    console.log("go to up");
});

document.querySelector("#entre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#contato");

    console.log("go to up");
});

document.querySelector("#seta").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#heard");

    console.log("go to up");
});

/*Btn*/
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 200)
})
