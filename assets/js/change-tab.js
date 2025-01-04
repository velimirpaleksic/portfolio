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