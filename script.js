window.addEventListener("load", function() {
    var headerLinks = document.querySelectorAll("header ul li a");
    var currentUrl = window.location.pathname.split('/').pop(); // Get only the file name

    headerLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentUrl || (currentUrl === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
let lastScrollTime = 0;
window.addEventListener("scroll", function() {
    const currentScrollTime = new Date().getTime();
    if (currentScrollTime - lastScrollTime > 100) { // Throttle time: 100ms
        lastScrollTime = currentScrollTime;
        
        // Your scroll event logic here
    }
});

