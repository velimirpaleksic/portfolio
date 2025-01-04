document.addEventListener('DOMContentLoaded', function () {
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
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);

    if (document.querySelector("#prev-button")) {
        document.querySelector("#prev-button").addEventListener('click', () => {
            moveSlide(-1);
            resetAutoSlide();
        });
        
        document.querySelector("#next-button").addEventListener('click', () => {
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

    /* WAVING HAND */
    const wavingHand = document.getElementById("waving-hand");
  
    wavingHand.addEventListener("mouseenter", () => {
        wavingHand.classList.add("waving");
    });
    wavingHand.addEventListener("mouseleave", () => {
        wavingHand.classList.remove("waving");
    });
});