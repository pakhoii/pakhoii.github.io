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

function activeMenuToggle() {
    // Get menu toggle and nav menu (link to other pages) from html
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
    
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active")
        })

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.addEventListener("click", () => {
            navMenu.classList.remove("active")
            })
        })
    }
}

function navigateToGithub() {
    const projectCard = document.querySelector(".project-card")

    if (projectCard) {
        const name = projectCard.querySelector(".project-info h3").textContent

        switch (name) {
            case "Skyline Serenade":
                window.location.href = "https://github.com/DrGnNatsu/Principles-of-Database-Management-IU"
                break
            case "Watch Together and Recommendation System":
                window.location.href = "https://github.com/ngvuthtinh/Movie_Recommendation_System"
                break
            case "Management System":
                window.location.href = "https://github.com/PhamAnhKhoi10/advanced-employee-management-system"
                break
        }
    }
}

const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.classList.remove("show")
    })

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const subject = document.getElementById("subject").value.trim()
    const message = document.getElementById("message").value.trim()
    const terms = document.getElementById("terms").checked

    let isValid = true

    // Validate name
    if (name.length < 2) {
      showError("nameError", "Name must be at least 2 characters")
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showError("emailError", "Please enter a valid email address")
      isValid = false
    }

    // Validate subject
    if (subject.length < 5) {
      showError("subjectError", "Subject must be at least 5 characters")
      isValid = false
    }

    // Validate message
    if (message.length < 10) {
      showError("messageError", "Message must be at least 10 characters")
      isValid = false
    }

    // Validate terms
    if (!terms) {
      showError("termsError", "You must agree to the terms")
      isValid = false
    }

    if (isValid) {
      // Show success message
      const formMessage = document.getElementById("formMessage")
      formMessage.textContent = "Thank you! Your message has been sent successfully."
      formMessage.classList.add("success")
      formMessage.classList.remove("error")

      // Reset form
      contactForm.reset()

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove("success")
      }, 5000)
    }
  })

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId)
    errorElement.textContent = message
    errorElement.classList.add("show")
  }
}