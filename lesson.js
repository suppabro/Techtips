// =======================================
// TechVerse Lesson Loader
// =======================================

// Lesson Data
const lessons = {

    esim: {
        title: "What is eSIM?",
        description: "A built-in digital SIM card.",
        content:
        "eSIM is a digital SIM that is built into your phone. You don't need to insert a physical SIM card. Just scan a QR code to activate your mobile network.",

        selling:
        "Tell customers that eSIM makes switching networks easier and supports Dual SIM on many phones.",

        quiz:
        "Q: Does eSIM require a physical SIM card?\n\nAnswer: No."
    },

    nfc: {
        title: "What is NFC?",
        description: "Near Field Communication",
        content:
        "NFC lets two devices communicate when they are very close together. It is commonly used for contactless payments and quickly pairing accessories.",

        selling:
        "Mention that NFC is useful for payments, Bluetooth pairing, and smart tags.",

        quiz:
        "Q: Can NFC be used for contactless payments?\n\nAnswer: Yes."
    },

    gorilla: {
        title: "What is Gorilla Glass?",
        description: "Extra protection for your screen.",
        content:
        "Gorilla Glass helps protect your phone from scratches and small drops. It is stronger than normal glass but it is NOT unbreakable.",

        selling:
        "Explain that Gorilla Glass improves durability, but using a screen protector is still recommended.",

        quiz:
        "Q: Is Gorilla Glass unbreakable?\n\nAnswer: No."
    },

    refresh: {
        title: "What is 120Hz Refresh Rate?",
        description: "A smoother display experience.",
        content:
        "A 120Hz display refreshes the screen 120 times every second, making scrolling, gaming and animations feel smoother than 60Hz.",

        selling:
        "Customers who play games or use social media a lot will notice a smoother experience.",

        quiz:
        "Q: Which feels smoother, 60Hz or 120Hz?\n\nAnswer: 120Hz."
    }

};

// Default Lesson
let lesson = lessons.nfc;

// Read URL
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if(id && lessons[id]){
    lesson = lessons[id];
}

// Load Data

document.getElementById("lesson-title").textContent =
lesson.title;

document.getElementById("lesson-description").textContent =
lesson.description;

document.getElementById("lesson-content").textContent =
lesson.content;

document.getElementById("selling-tip").textContent =
lesson.selling;

document.getElementById("quiz").textContent =
lesson.quiz;
