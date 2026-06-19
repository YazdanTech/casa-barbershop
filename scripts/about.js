document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openVideoBtn");
    const closeBtn = document.getElementById("closeVideoBtn");
    const modal = document.getElementById("parkingModal");
    const video = document.getElementById("parkingVideo");
    let playTimeout;

    if (openBtn && modal && video && closeBtn) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("active");
            playTimeout = setTimeout(() => {
                video.play();
            }, 1000);
        });

        closeBtn.addEventListener("click", () => {
            clearTimeout(playTimeout);
            modal.classList.remove("active");
            video.pause();
            video.currentTime = 0;
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                clearTimeout(playTimeout);
                modal.classList.remove("active");
                video.pause();
                video.currentTime = 0;
            }
        });
    }
});