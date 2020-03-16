const button = document.getElementById("btn");
const contact = document.getElementById("contact");
const closeBtn = document.getElementById("close");

button.addEventListener("click", () => {
	contact.classList.remove("hidden");
	})

closeBtn.addEventListener("click", () => {
	contact.classList.add("hidden");
})