const styleSwitcher = document.querySelector('.style-switcher');

styleSwitcher.addEventListener('click', function () {
    const icon = styleSwitcher.querySelector('i');
    const isDarkMode = document.body.classList.toggle("dark");

    // Toggle icon classes
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');

    // Update title attribute
    styleSwitcher.setAttribute('title', isDarkMode ? 'Light Mode' : 'Dark Mode');
});

// Set default title based on initial mode
styleSwitcher.setAttribute('title', document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode');

function equalizeParagraphHeight() {
    let paragraphs = document.querySelectorAll('.projects .content-block p');
    let maxHeight = 0;

    // Reset all <p> heights to auto
    paragraphs.forEach(p => p.style.height = 'auto');

    // Find max height
    paragraphs.forEach(p => {
        maxHeight = Math.max(maxHeight, p.offsetHeight);
    });

    // Apply max height to all <p> elements
    paragraphs.forEach(p => p.style.height = `${maxHeight}px`);
}

// Run on page load and resize
window.addEventListener('load', equalizeParagraphHeight);
window.addEventListener('resize', equalizeParagraphHeight);
window.addEventListener('load', function () {
    if (document.body.classList.contains("dark")) {
        styleSwitcher.querySelector('i').classList.add('fa-sun');
    }
    else {
        styleSwitcher.querySelector('i').classList.add('fa-moon');
    }
})

// scrollspy
let sectionLinks = document.querySelectorAll(".nav a.nav-link");
function onScroll() {
    let scrollPosition = window.scrollY;

    sectionLinks.forEach(function (link) {
        let container = document.querySelector(link.getAttribute("href"));
        if (container) {
            let containerOffset = container.offsetTop;
            let containerHeight = container.offsetHeight;
            let containerBottom = containerOffset + containerHeight;

            if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}
document.addEventListener("scroll", onScroll);
// scroll spy end

sectionLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.body.classList.remove("open-menu");
    });
});

document.querySelector('.nav-toggler').addEventListener('click', function() {
    if (window.innerWidth <= 767) {
        document.body.classList.toggle('open-menu');
    }
});