function menuToggle() {
    const toggle = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggle.classList.toggle('active');
    section.classList.toggle('active');
}
function toggleVideoImage() {
    const video = document.getElementById("background-video");
    const placeholderImage = document.getElementById("placeholder-image");
    const toggleButton = document.querySelector(".toggle-video");

    if (video.style.display === "none" || !video.style.display) {
        video.style.display = "block";
        placeholderImage.style.display = "none";

        toggleButton.setAttribute("aria-pressed", "false");
        toggleButton.setAttribute("aria-label", "Show image instead of video");
        toggleButton.textContent = "Switch to Image";
    } else {
        video.style.display = "none";
        placeholderImage.style.display = "block";
        toggleButton.setAttribute("aria-pressed", "true");
        toggleButton.setAttribute("aria-label", "Show video instead of image");
        toggleButton.textContent = "Switch to Video";
    }
}