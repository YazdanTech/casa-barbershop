document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openVideoBtn");
    const closeBtn = document.getElementById("closeVideoBtn");
    const modal = document.getElementById("parkingModal");
    const video = document.getElementById("parkingVideo");
    let playTimeout;

    const videoSrc = "https://www.youtube.com/embed/Tn0oJpN8Gpw";

    if (openBtn && modal && video && closeBtn) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("active");
            playTimeout = setTimeout(() => {
                video.src = videoSrc + "?autoplay=1";
            }, 1000);
        });

        closeBtn.addEventListener("click", () => {
            clearTimeout(playTimeout);
            modal.classList.remove("active");
            video.src = ""; // stops playback
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                clearTimeout(playTimeout);
                modal.classList.remove("active");
                video.src = ""; // stops playback
            }
        });
    }
});