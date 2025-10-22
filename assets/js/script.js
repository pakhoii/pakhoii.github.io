function initializeDarkMode() {
    const themeToggle = document.querySelector(".theme-toggle");

    if (themeToggle) {
        // Get the saved status of theme when we reload the page
        const currentTheme = localStorage.getItem("theme") || "light";

        if (currentTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        }

        // Button onClick()
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");

            if (isDarkMode) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }
        });
    }
}