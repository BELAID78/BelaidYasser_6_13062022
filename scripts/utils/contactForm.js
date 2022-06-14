function displayModal(name) {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector('.contact-photographer-name').innerHTML = name
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
