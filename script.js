function toggleTheme() {
    const body = document.body;
    const current = body.getAttribute("data-theme");
    body.setAttribute("data-theme", current === "light" ? "dark" : "light");
}
