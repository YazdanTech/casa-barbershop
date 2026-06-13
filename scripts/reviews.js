const reviewSets = [
  [
    {
      stars: "★★★★★",
      text: "Exceptional attention to detail and one of the most refined barber experiences in Dubai. The atmosphere, precision, and professionalism exceeded expectations completely.<br><br><b>Services:</b> Beard Trim, Hair Cut",
      user: "Michael Reed"
    },
    {
      stars: "★★★★★",
      text: "Premium service from the moment you enter. The haircut, beard styling, and environment all feel carefully designed for luxury and comfort.",
      user: "Daniel Carter"
    },
    {
      stars: "★★★★★",
      text: "Clean aesthetic, highly skilled barbers, and an atmosphere that feels sophisticated without trying too hard. Easily one of the best grooming spaces.",
      user: "Adam Hayes"
    }
  ],
  [
    {
      stars: "★★★★★",
      text: "Sharp execution, calm environment, and consistent quality from start to finish. The experience feels polished and disciplined.",
      user: "James Walker"
    },
    {
      stars: "★★★★★",
      text: "A proper premium setup. The service is precise, the styling is clean, and nothing feels rushed.",
      user: "Omar Bennett"
    },
    {
      stars: "★★★★★",
      text: "Strong attention to form and detail. The whole visit had a smooth, elevated feeling.",
      user: "Lucas Gray"
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

    const totalExitTime =
        (cards.length - 1) * 150 + 2400;

    setTimeout(() => {

        currentSetIndex =
            (currentSetIndex + 1) % reviewSets.length;

        renderReviews(currentSetIndex);

    }, totalExitTime);

});