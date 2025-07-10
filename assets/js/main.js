document.addEventListener("DOMContentLoaded", function () {
    /* EMAIL */
    const emailButton = document.getElementById("email");
    
    if (emailButton) 
    {
        emailButton.addEventListener("click", function () {
            try {
                navigator.clipboard.writeText("velimir.paleksic@gmail.com");
                alert("Email copied to clipboard! velimir.paleksic@gmail.com");
            } catch {
                alert("velimir.paleksic@gmail.com");
            }
        })
    }

    /* POPUP MODAL */
    const modal = document.getElementById("popup-modal");
    const modalImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".popup-close");

    document.querySelectorAll(".popup-trigger").forEach(img => {
        img.addEventListener("click", () => {
            const originalSrc = img.src.replace("/certificates/", "/certificates/original/").replace(".webp", ".jpg");
            modalImg.src = originalSrc;
            modal.style.display = "flex";
        });
    });

    document.querySelectorAll(".projects .thumbnail img").forEach(img => {
        img.addEventListener("click", () => {
            const originalSrc = img.src.replace("/projects/", "/projects/original/").replace(".webp", ".png");
            modalImg.src = originalSrc;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});