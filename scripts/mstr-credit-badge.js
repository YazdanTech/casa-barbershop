(function () {
    'use strict';

    var badge = document.getElementById('mstrBadge');

    if (badge && 'IntersectionObserver' in window) {
        var badgeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.1 });

        badgeObserver.observe(badge);
    } else if (badge) {
        badge.classList.add('is-visible');
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    const badgeLink = document.querySelector(".mstr-credit-badge a");
    const overlay = document.getElementById("redirectOverlay");
    const overlayText = document.getElementById("redirectText");
    const btnVisit = document.getElementById("mstrBtnVisit");
    const btnBack = document.getElementById("mstrBtnBack");

    if (badgeLink && overlay && overlayText) {
        const targetUrl = badgeLink.getAttribute("href");
        
        // Accurate detection for mobile user-agents
        const isMobile = /Mobi|Android|iPhone|iPad|Macintosh/i.test(navigator.userAgent) && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

        badgeLink.addEventListener("click", (e) => {
            e.preventDefault();

            if (!isMobile) {
                // DESKTOP FLOW: Auto-cinematic redirection sequence
                setTimeout(() => {
                    overlay.classList.add("is-active");

                    setTimeout(() => {
                        overlayText.classList.add("fade-out");

                        setTimeout(() => {
                            window.open(targetUrl, '_blank');
                            overlay.classList.remove("is-active");
                            overlayText.classList.remove("fade-out");
                        }, 2000);
                    }, 1500);
                }, 500);
            } else {
                // MOBILE FLOW: Halt automated routing, serve explicit interaction elements
                setTimeout(() => {
                    overlay.classList.add("is-active");

                    setTimeout(() => {
                        overlay.classList.add("show-buttons");
                    }, 1000);
                }, 500);
            }
        });

        // Interactive handling for manual mobile choice execution
        if (btnVisit) {
            btnVisit.addEventListener("click", () => {
                window.open(targetUrl, '_blank');
                overlay.classList.remove("is-active", "show-buttons");
            });
        }

        if (btnBack) {
            btnBack.addEventListener("click", () => {
                overlay.classList.remove("is-active", "show-buttons");
            });
        }
    }
});