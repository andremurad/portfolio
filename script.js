function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector(".switch-icon");

    const isLight = body.getAttribute("data-theme") === "light";

    if (isLight) {
        body.setAttribute("data-theme", "dark");
        icon.textContent = "🌙"; // ícone lua
    } else {
        body.setAttribute("data-theme", "light");
        icon.textContent = "☀️"; // ícone sol
    }
}
