const modal = document.getElementById("postModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".post").forEach(post => {
  post.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = post.querySelector("img").src;
    modalCaption.textContent = post.dataset.caption;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
