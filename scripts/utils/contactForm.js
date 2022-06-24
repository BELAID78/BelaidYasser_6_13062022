function displayModal(name) {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.querySelector('.contact-photographer-name').innerHTML = name
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function submitForm(event) {
    //stop reload page by the submit effect
    event.preventDefault()

    let inputs = document.querySelectorAll('input'),
        message = document.querySelector('textarea'),
        data = {};

    //get all the data from inputs
    inputs.forEach(input => {
        //get the data
        data[input.id] = input.value;

        //reset the data
        input.value = ""
    })

    //get the message from textarea
    data[message.id] = message.value

    //reset the data
    message.value = "";

    //show data in console
    console.log(data)

    //hide the modal
    closeModal()
}