// ===============================
// TechVerse Script
// ===============================

console.log("🚀 Welcome to TechVerse");

// -------------------------------
// Search Lessons
// -------------------------------

const searchInput = document.querySelector(".search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const lessons = document.querySelectorAll(".lesson");

        lessons.forEach((lesson) => {

            const text = lesson.innerText.toLowerCase();

            if (text.includes(value)) {
                lesson.style.display = "block";
            } else {
                lesson.style.display = "none";
            }

        });

    });
}

// -------------------------------
// Open Lesson Pages
// -------------------------------

const lessonIds = [
    "esim",
    "nfc",
    "refresh",
    "gorilla",
    "androidgo",
    "amoled"
];

const buttons = document.querySelectorAll(".lesson button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        window.location.href =
            "lesson.html?id=" + lessonIds[index];

    });

});

// -------------------------------
// Card Animation
// -------------------------------

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});

// -------------------------------
// Scroll Animation
// -------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".lesson,.card").forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s";

    observer.observe(el);

});

// -------------------------------
// Footer
// -------------------------------

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} TechVerse • Created by Supun - Rathnapura`;

}
