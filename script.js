document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector(".homeLink");
    const aboutLink = document.querySelector(".aboutLink");
    const homeSection = document.querySelector(".home");
    const aboutSection = document.querySelector("#about");

    const homeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeLink.classList.add("active");
                aboutLink.classList.remove("active");
            }
        });
    });

    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeLink.classList.remove("active");
                aboutLink.classList.add("active");
            }
        });
    });

    homeObserver.observe(homeSection);
    aboutObserver.observe(aboutSection);
});

