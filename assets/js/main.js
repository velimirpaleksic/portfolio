/* SKILLS */
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

/* CLIENTS SLIDER */
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;
let autoSlideInterval;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

if(document.querySelector("#slider-controls") {
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
    
    document.querySelector("#slider-controls").addEventListener('click', () => {
        moveSlide(1);
        resetAutoSlide();
    });
}
    
/* TEXT SCRAMBLE */
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

/* CHANGE TABS */
function changeTab(button) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // Recent projects
    const personalSection = document.getElementById("personal");
    const commercialSection = document.getElementById("commercial");

    if (button.textContent === "Personal") {
        personalSection.style.display = "flex";
        commercialSection.style.display = "none";
    } else if (button.textContent === "Commercial") {
        personalSection.style.display = "none";
        commercialSection.style.display = "flex";
    }

    // Experience
    const workSection = document.getElementById("work");
    const educationSection = document.getElementById("education");

    if (button.textContent === "Work") {
        workSection.style.display = "flex";
        educationSection.style.display = "none";
    } else if (button.textContent === "Education") {
        workSection.style.display = "none";
        educationSection.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    /* WAVING HAND */
    const wavingHand = document.getElementById("waving-hand");
  
    wavingHand.addEventListener("mouseenter", () => {
        wavingHand.classList.add("waving");
    });
  
    wavingHand.addEventListener("mouseleave", () => {
        wavingHand.classList.remove("waving");
    });

    /* POPUP MODAL */
    const modal = document.getElementById('popup-modal');
    const modalImg = document.getElementById('popup-img');
    const closeBtn = document.querySelector('.popup-close');

    document.querySelectorAll('.popup-trigger').forEach(img => {
        img.addEventListener('click', () => {
            const originalSrc = img.src.replace('/certificates/', '/certificates/original/').replace('.webp', '.jpg');
            modalImg.src = originalSrc;
            modal.style.display = 'flex';
        });
    });

    document.querySelectorAll('.projects .thumbnail img').forEach(img => {
        img.addEventListener('click', () => {
            const originalSrc = img.src.replace('/projects/', '/projects/original/').replace('.webp', '.png');
            modalImg.src = originalSrc;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
