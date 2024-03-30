document.addEventListener("DOMContentLoaded", function () {
    // Function to adjust the height and padding of the home section to fit the screen
    function adjustLayout() {
        const homeSection = document.querySelector(".home");
        const windowHeight = window.innerHeight;

        // Adjust padding based on the screen width
        if (window.innerWidth <= 768) {
            homeSection.style.padding = "10px 6%";
        } else {
            homeSection.style.padding = "30px 12% 0";
        }

        homeSection.style.minHeight = windowHeight + "px";
    }

    // Call the adjustLayout function when the page loads
    adjustLayout();

    // Call the adjustLayout function when the window is resized
    window.addEventListener("resize", adjustLayout);

    // Highlight the "About" link when the about section is in view
    const aboutLink = document.querySelector(".aboutLink");
    const aboutSection = document.querySelector("#about");
    const homeLink = document.querySelector(".homeLink");
    const homeSection = document.querySelector(".home");

    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                aboutLink.classList.add("active");
                homeLink.classList.remove("active");
            } else {
                aboutLink.classList.remove("active");
            }
        });
    }, { threshold: 0.5 }); // Use a threshold to ensure accurate intersection detection

    aboutObserver.observe(aboutSection);

    // Highlight the "Home" link when the home section is in view
    const homeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                homeLink.classList.add("active");
                aboutLink.classList.remove("active");
            } else {
                homeLink.classList.remove("active");
            }
        });
    }, { threshold: 0.5 }); // Use a threshold to ensure accurate intersection detection

    homeObserver.observe(homeSection);

    // Highlight the "About" link when clicked
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutLink.classList.add("active");
        homeLink.classList.remove("active");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    // Highlight the "Home" link when clicked
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        homeLink.classList.add("active");
        aboutLink.classList.remove("active");
        homeSection.scrollIntoView({ behavior: "smooth" });
    });
});
