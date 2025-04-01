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
});