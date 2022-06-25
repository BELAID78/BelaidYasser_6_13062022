window.addEventListener('keydown', cycleTabOnlyInsideContactModal);

window.addEventListener('keydown', (e) => {

    if(!document.querySelector('.modal').classList.contains('active')) {
        return false;
    }

    if(e.key === "Escape") {
        closeModal()
    }
});
function displayModal(name) {
    const modal = document.getElementById("contact_modal");

	modal.style.display = "block";

    document.querySelector('.contact-photographer-name').innerHTML = name

    document.querySelector('#first').focus()

    document.querySelector('.modal').classList.add('active')
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.querySelector('.modal').classList.remove('active')
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


function cycleTabOnlyInsideContactModal(e) {

    if(!document.querySelector('.modal').classList.contains('active')) {
        return false;
    }

    if(e.keyCode === 9) {
        let focusable = document.querySelector('.modal').querySelectorAll('input, textarea, button');

        if(focusable.length) {
            let firstFocusableElement = focusable[0],
                lastFocusableElement = focusable[focusable.length -1];

            let shift = e.shiftKey;

            if(shift) {

                if(e.target === first) {
                    lastFocusableElement.focus();
                    e.preventDefault()
                }

            }else{

                if(e.target === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault()
                }
                
            }
        }
    }
}