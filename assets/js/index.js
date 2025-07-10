document.addEventListener("DOMContentLoaded", function () {
    /* TEXT SCRAMBLE */
    document.querySelectorAll(".title h1").forEach(title => {
        const originalText = title.textContent;

        title.addEventListener("mouseenter", () => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let scrambledText = Array.from(originalText).map(char => (char === " " ? " " : chars.charAt(Math.floor(Math.random() * chars.length))));
            let index = 0;

            const interval = setInterval(() => {
                scrambledText = scrambledText.map((char, i) =>
                    i >= index ? (originalText[i] === " " ? " " : chars.charAt(Math.floor(Math.random() * chars.length))) : char
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