
document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector(".page-header");

    window.addEventListener("scroll", function() {
        console.log(window.scrollY)
        if (window.scrollY > 90) {
            header.classList.add("page-header-sticky")
        } else {
            header.classList.remove("page-header-sticky")
        }
    })
;
});
