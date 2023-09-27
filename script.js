// JavaScript for dynamic content and smooth scrolling

document.addEventListener("DOMContentLoaded", function () {
    // Example experiences data
    const exampleExperiences = [
        "Example Experience 1",
        "Example Experience 2",
        "Example Experience 3",
    ];

    const exampleList = document.getElementById("example-list");

    // Function to load example experiences
    function loadExampleExperiences() {
        exampleExperiences.forEach((experience) => {
            const listItem = document.createElement("li");
            listItem.textContent = experience;
            exampleList.appendChild(listItem);
        });
    }

    // Toggle button functionality
    const toggleButton = document.getElementById("toggle-example");
    toggleButton.addEventListener("click", () => {
        if (exampleList.style.display === "none" || exampleList.style.display === "") {
            exampleList.style.display = "block";
            loadExampleExperiences(); // Load the experiences when shown for the first time
        } else {
            exampleList.style.display = "none";
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});