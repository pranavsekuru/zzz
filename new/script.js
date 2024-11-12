function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleButton = document.getElementById("toggle-btn");
    let mainContent = document.querySelector(".main-content");
    let cardContainer = document.querySelector(".card1-container");
    let footer = document.querySelector("footer");

    // Toggle the 'active' class on the sidebar
    sidebar.classList.toggle("active");

    // Change the button icon depending on the sidebar's state
    if (sidebar.classList.contains("active")) {
        toggleButton.innerHTML = "✖"; // Close icon when sidebar is open
        mainContent.style.marginLeft = "250px"; // Adjust margin to fit the sidebar
        mainContent.style.width = "80%"; // Shrink main content width
        cardContainer.style.marginLeft = "250px";
        cardContainer.style.width = "80%";
        footer.style.marginLeft = "250px"; // Adjust footer margin
        footer.style.width = "80%"; // Shrink footer width
    } else {
        toggleButton.innerHTML = "☰"; // Hamburger icon when sidebar is closed
        mainContent.style.marginLeft = "0"; // Reset margin when sidebar is closed
        mainContent.style.width = "100%"; // Expand main content width
        cardContainer.style.marginLeft = "0";
        cardContainer.style.width = "100%";
        footer.style.marginLeft = "0"; // Reset footer margin
        footer.style.width = "100%"; // Expand footer width
    }
}
