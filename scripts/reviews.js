const reviewSets = [
  [
    {
      stars: "★★★★★",
      text: "Incredibly precise work. The team here really pays attention to detail. Easily the cleanest skin fade I've had since moving here.",
      services: ["Skin Fade"],
      user: "Shamial A."
    },
    {
      stars: "★★★★★",
      text: "Love the authentic atmosphere here. It has a great French-inspired aesthetic combined with total professionalism. Extremely satisfied.",
      services: ["Classic Haircut & Styling"],
      user: "Yassine"
    },
    {
      stars: "★★★★★",
      text: "They truly understand the craft of grooming. Friendly reception, premium products, and they genuinely take their time to ensure the look suits your face shape perfectly.",
      services: ["Taper Fade & Beard Trim"],
      user: "Sean B."
    },
    {
      stars: "★★★★★",
      text: "The online booking system makes scheduling a breeze. Zero waiting times when you arrive. Professional staff, premium tools, and amazing service flow.",
      services: ["Weekday Reset Package"],
      user: "Mohamed R."
    }
  ],
  [
    {
      stars: "★★★★★",
      text: "A luxury grooming experience through and through. The hot towel shave was incredibly relaxing and executed flawlessly. This shop sets a high bar.",
      services: ["Traditional Hot Towel Shave"],
      user: "David M."
    },
    {
      stars: "★★★★★",
      text: "The attention to detail at this salon is incredible. They don't rush you out of the chair. The ambiance is elite and very relaxing.",
      services: ["Haircut & Beard Trim"],
      user: "Alex K."
    },
    {
      stars: "★★★★★",
      text: "Hands down the best gents' salon experience in Dubai. The styling advice is solid, and the overall execution of the shop standard is top-tier.",
      services: ["Hair Coloring & Cut"],
      user: "Marcus G."
    },
    {
      stars: "★★★★★",
      text: "Immaculately clean space with a great aesthetic layout. The overall skill level of the team is clearly standardized. High quality cuts every time.",
      services: ["Skin Fade & Line Up"],
      user: "Tariq N."
    }
  ],
  [
    {
      stars: "★★★★★",
      text: "The standard of cleanliness and professionalism across the board here is incredible. The sharpest contours I've ever had done. Elite location.",
      services: ["Beard Trim & Line Up"],
      user: "Kareem H."
    },
    {
      stars: "★★★★★",
      text: "They actually listen to what you want and offer intelligent styling feedback. The staff clearly goes through meticulous training. Excellent execution.",
      services: ["Long Hair Styling & Trim"],
      user: "Nathan W."
    },
    {
      stars: "★★★★★",
      text: "Spotless environment, great background music, and immediately welcoming. The hospitality is just as good as the precision of the work.",
      services: ["Classic Cut"],
      user: "Omar F."
    },
    {
      stars: "★★★★★",
      text: "You pay for premium quality and that is exactly what you receive here. The entire team is polite, precise, and completely dedicated to their craft.",
      services: ["Haircut and Beard Combo"],
      user: "Julian V."
    }
  ]
];

let currentSetIndex = 0;
const btn = document.getElementById("moreReviewsBtn");
const grid = document.querySelector(".reviews-grid");

function renderReviews(setIndex) {
  const reviews = reviewSets[setIndex];
  grid.innerHTML = reviews.map((review, i) => `
    <article class="review-card entering">
      <div class="review-stars">${review.stars}</div>
      <p class="review-description">${review.text}</p>
      <div class="review-services">
        <b>Services: </b>
        ${review.services.map(service => `<span class="service-tag">${service}</span>`).join("")}
      </div>
      <h3 class="review-user">— ${review.user}</h3>
    </article>
  `).join("");

  requestAnimationFrame(() => {
    grid.querySelectorAll(".review-card").forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove("entering");
        card.classList.add("entered");
      }, i * 250);
    });
  });
}

btn.addEventListener("click", () => {
    const cards = grid.querySelectorAll(".review-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("leaving");
        }, index * 250);
    });

    const totalExitTime = (cards.length - 1) * 150 + 2400;

    setTimeout(() => {
        currentSetIndex = (currentSetIndex + 1) % reviewSets.length;
        renderReviews(currentSetIndex);
    }, totalExitTime);
});