(function(){
    const nav = document.getElementById("menu");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const body = document.querySelector('body');

    navToggle.addEventListener("click", () => {
        
        const visiblity = nav.getAttribute("data-visible");
        if (visiblity === "false") {
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
            body.classList.add('overlay');
        } else {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
            body.classList.remove('overlay');
        }
    })
})()