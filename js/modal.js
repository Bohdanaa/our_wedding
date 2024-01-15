const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Відкрити модальне вікно
openModalBtn.addEventListener("click", function () {
	modal.style.display = "block";
});

// Закрити модальне вікно при натисканні на кнопку "Закрити"
closeModalBtn.addEventListener("click", function () {
	modal.style.display = "none";
});

// Закрити модальне вікно при натисканні за межами контенту
window.addEventListener("click", function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
});
