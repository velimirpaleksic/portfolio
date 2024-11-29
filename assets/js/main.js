/*
    SKILLS
*/
const skillElements = document.querySelectorAll(".skills .skill, .technology, .preview");

// Add event listeners for hover
skillElements.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        const randomRotation = Math.random() * 70 - 35;
        
        const element = skill.querySelector("svg, img");
        if (element) {
            element.style.transform = `rotate(${randomRotation}deg)`;
        }
    });

    skill.addEventListener("mouseleave", () => {
        // Reset rotation on hover out
        const element = skill.querySelector("svg, img");
        if (element) {
            element.style.transform = "rotate(0deg)";
        }
    });
});

/*
    TEXT SCRAMBLE
*/
document.querySelectorAll(".title h1").forEach(title => {
    const originalText = title.textContent;

    title.addEventListener("mouseenter", () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let scrambledText = Array.from(originalText).map(() => chars.charAt(Math.floor(Math.random() * chars.length)));
        let index = 0;

        const interval = setInterval(() => {
            // Randomize all characters that are not yet locked
            scrambledText = scrambledText.map((char, i) =>
                i >= index ? chars.charAt(Math.floor(Math.random() * chars.length)) : char
            );

            // Lock in the correct character at the current index
            if (index < originalText.length) {
                scrambledText[index] = originalText[index];
                index++;
            } else {
                clearInterval(interval); // Stop once all characters are locked in
            }

            title.textContent = scrambledText.join("");
        }, 50); // Adjust speed as needed
    });
});

/*
    SELECT PROJECTS
*/
function selectProjects(button) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    const personalSection = document.getElementById("personal");
    const commercialSection = document.getElementById("commercial");

    if (button.textContent === "Personal") {
        personalSection.style.display = "flex";
        commercialSection.style.display = "none";
    } else if (button.textContent === "Commercial") {
        personalSection.style.display = "none";
        commercialSection.style.display = "flex";
    }
}

/*
    SMOOTH SCROLL TO ELEMENT
*/
function scrollToElement(selector, duration = 500) {
    const element = document.querySelector(selector);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, start + distance * percent);

        if (percent < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

//scrollToElement("#target", 800);