const blogCards = document.querySelectorAll(".blog-card");
let currentCardIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    blogCards[currentCardIndex].classList.remove("active");
    currentCardIndex = (currentCardIndex + 1) % blogCards.length;
    blogCards[currentCardIndex].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
    blogCards[currentCardIndex].classList.remove("active");
    currentCardIndex = (currentCardIndex - 1 + blogCards.length) % blogCards.length;
    blogCards[currentCardIndex].classList.add("active");
}); 