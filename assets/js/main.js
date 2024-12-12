/*
    SKILLS
*/
const skillElements = document.querySelectorAll(".skills .skill, .technology, .preview");

skillElements.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        let randomRotation;
        
        do {
            randomRotation = Math.random() * 60 - 40;
        } while (randomRotation > -15 && randomRotation < 15);

        const element = skill.querySelector("svg, img");
        if (element) {
            element.style.transform = `rotate(${randomRotation}deg)`;
        }
    });

    skill.addEventListener("mouseleave", () => {
        const element = skill.querySelector("svg, img");
        if (element) {
            element.style.transform = "rotate(0deg)";
        }
    });
});

/* 
    WAVING HAND
*/
document.addEventListener("DOMContentLoaded", () => {
    const wavingHand = document.getElementById("waving-hand");
  
    wavingHand.addEventListener("mouseenter", () => {
        wavingHand.classList.add("waving");
    });
  
    wavingHand.addEventListener("mouseleave", () => {
        wavingHand.classList.remove("waving");
    });
});  

/*
    TEXT SCRAMBLE
*/
document.querySelectorAll(".title h1").forEach(title => {
    const originalText = title.textContent;

    title.addEventListener("mouseenter", () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let scrambledText = Array.from(originalText).map(char => (char === ' ' ? ' ' : chars.charAt(Math.floor(Math.random() * chars.length))));
        let index = 0;

        const interval = setInterval(() => {
            scrambledText = scrambledText.map((char, i) =>
                i >= index ? (originalText[i] === ' ' ? ' ' : chars.charAt(Math.floor(Math.random() * chars.length))) : char
            );

            if (index < originalText.length) {
                scrambledText[index] = originalText[index];
                index++;
            } else {
                clearInterval(interval);
            }

            title.textContent = scrambledText.join("");
        }, 50);
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