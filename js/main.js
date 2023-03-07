function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#min");

    console.log("go to up");
});

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

/*Footer*/

document.querySelector("#sobre-footer").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#min-sobre");

    console.log("go to up");
});

document.querySelector("#habilidades-footer").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#idades-footer");

    console.log("go to up");
});

document.querySelector("#contato-footer").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#footer-contato");

    console.log("go to up");
});