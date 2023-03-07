window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 200)
})