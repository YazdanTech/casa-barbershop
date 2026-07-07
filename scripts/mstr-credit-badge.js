(function () {
    'use strict';

    var badge = document.getElementById('mstrBadge');
    
    if (badge && 'IntersectionObserver' in window) {
        var badgeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) { 
                    // Triggers the CSS wave animation
                    entry.target.classList.add('is-visible');
                } else {
                    // Optional: remove class when out of view to restart wave upon return
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.1 }); // Triggers when 50% of the badge is visible

        badgeObserver.observe(badge);
    } else if (badge) {
        // Fallback for older browsers
        badge.classList.add('is-visible');
    }
})();