document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

const openModal = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.querySelector("body");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  body.classList.remove("modal-open");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    body.classList.remove("modal-open");
  }
});
