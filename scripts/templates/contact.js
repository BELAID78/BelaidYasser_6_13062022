class Contact {
    //add cycle tab inside the open modal
    addCycleTabInsideContactModal() {
        window.addEventListener('keydown', e => this._cycleTabOnlyInsideContactModal(e));
    }

    //add close after press escape key
    addCloseModalAfterPressEscape() {
        window.addEventListener('keydown', (e) => {

            //if the modal is not open do nothing
            if(!document.querySelector('.modal').classList.contains('active')) {
                return false;
            }

            //close the modal
            if(e.key === "Escape") {
                closeModal()
            }
        });
    }

    //cycle inside the open modal
    _cycleTabOnlyInsideContactModal(e) {
        // alert ESLint disable for this line that contains multiples functions  

        //if the contact modal not open do nothing
        if(!document.querySelector('.modal').classList.contains('active')) {
            return false;
        }

        //if press tab key
        if(e.keyCode === 9) {

            //get all the focusable element
            let focusable = document.querySelector('.modal').querySelectorAll('input, textarea, button');

            //we have elements
            if(focusable.length) {
                let firstFocusableElement = focusable[0],
                    lastFocusableElement = focusable[focusable.length -1];

                let shift = e.shiftKey;

                if(shift) {
                    //if rollback
                    if(e.target === first) {
                        lastFocusableElement.focus();
                        e.preventDefault()
                    }

                }else{
                    //if forward
                    if(e.target === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault()
                    }

                }
            }
        }
    }

    //render the events for contact modal
    render() {

        this.addCloseModalAfterPressEscape();

        this.addCycleTabInsideContactModal();
    }
} 