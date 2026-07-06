// ===============================
// TechVerse Script
// Version 1.0
// ===============================

// Welcome Message
console.log("🚀 Welcome to TechVerse");

// -------------------------------
// Search Lessons
// -------------------------------

const searchInput = document.querySelector(".search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let lessons = document.querySelectorAll(".lesson");

    lessons.forEach((lesson) => {

      let text = lesson.innerText.toLowerCase();

      if (text.includes(value)) {
        lesson.style.display = "block";
      } else {
        lesson.style.display = "none";
      }

    });

  });
}

// -------------------------------
// Read More Buttons
// -------------------------------

const buttons = document.querySelectorAll(".lesson button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("🚧 Lesson page is coming soon!");

    });

});

// -------------------------------
// Card Hover Animation
// -------------------------------

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// -------------------------------
// Smooth Fade Animation
// -------------------------------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll(".lesson,.card").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".6s";

    observer.observe(el);

});

// -------------------------------
// Footer Year
// -------------------------------

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} TechVerse • Created by Supun - Rathnapura`;

}
