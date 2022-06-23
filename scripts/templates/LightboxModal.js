class LightboxModal {
    constructor(medias)
    {
        //media data
        this._medias = medias

        //selected item properties
        this._selectedCard = {
            opened      : false,
            selected    : '',
            htmlContent : '',
            selectedId  : null
        }

        //default directory name
        this._directoryName = '';

        //bind this operator to click close handler
        this.hideLightBoxHandler = this.hideLightBox.bind(this)

        //bind this operator to click next handler
        this._showNextElementHandler = this._showNextElement.bind(this)

        //bind this operator to click prev handler
        this._showPrevElementHandler = this._showPrevElement.bind(this)

        //bidn this operator to press next handler
        this.nextByKeyboardHandler = this.nextByKeyboardPress.bind(this)

        //bidn this operator to press previous handler
        this.prevByKeyboardHandler = this.prevByKeyboardPress.bind(this)

    }

    //add click event listener on close lightbox
    closeLightboxModalButton() {
        document.querySelector('.lightbox-close').addEventListener('click', this.hideLightBoxHandler)
    }

    //add clickk event listener on next item
    nextElementButtonClick() {
        document.querySelector('.lightbox-modal-arrow-right').addEventListener('click', this._showNextElementHandler)
    }

    //add clickk event listener on prev item
    prevElementButtonClick() {
        document.querySelector('.lightbox-modal-arrow-left').addEventListener('click', this._showPrevElementHandler)
    }

    //add press right arrow keyboard to show next element
    nextByKeyboardPress() {
        document.querySelector('.media-content').addEventListener('keydown', event => {
            if(event.key === 'ArrowRight') {
                this._showNextElement()
            }
        })
    }

    //add press left arrow keyboard to show previous element
    prevByKeyboardPress() {
        document.querySelector('.media-content').addEventListener('keydown', event => {
            if(event.key === 'ArrowLeft') {
                this._showPrevElement()
            }
        })
    }

    //hide light box by press escape keyboard
    closeLightBoxByKeyboard() {
        document.querySelector('.media-content').addEventListener('keydown', event => {
            if(event.key == "Escape") {
                this.hideLightBox()
            }
        });
    }
  
    //show the light box
    showLightBox(mediaId, index, directoryName) {

        //get the direcotry name
        this._directoryName = directoryName

        //remove body scroll
        document.body.classList.add('has-open-lightbox')

        //update light box properties
        this._selectedCard = {
            opened      : true,
            htmlContent : this.generateLightboxHtmlContent(mediaId, directoryName),
            selectedId  : mediaId,
            index       : index
        }

        //add item HTML content to light box container
        document.querySelector('.lightbox-modal-body').innerHTML = this._selectedCard.htmlContent

        //show the lightbox
        document.querySelector('.lightbox-modal').classList.add('show')

    }

    //generate light box HTML Content
    generateLightboxHtmlContent(id, directoryName) {
        
        //get the selected media id
        let selectedMedia = this._medias.find(media => media.id == id)

        //create image or video HTML content
        //return the light box content as HTML
        return selectedMedia.image !== undefined ? 
                `<img alt="${selectedMedia.title}" title="${selectedMedia.title}" src="assets/media/${directoryName}/${selectedMedia.image}" /><span>${selectedMedia.title}</span>` : 
                `<video alt="${selectedMedia.title}" title="${selectedMedia.title}" controls src="assets/media/${directoryName}/${selectedMedia.video}">
                    Your browser does not support the HTML5 Video element.
                </video><span>${selectedMedia.title}</span>`
    }

    //empty Light Box HTML Content
    emptyLightBoxHtmlContent() {
        return ``
    }

    //hide light box modal
    hideLightBox() {
        //return scroll to the body HTML element
        document.body.classList.remove('has-open-lightbox')
        
        //hide lightbox and empty it's HTML content
        this._selectedCard = {
            opened      : false,
            htmlContent : this.emptyLightBoxHtmlContent(),
            selectedId  : null
        }

        //empty the light box HTML content
        document.querySelector('.lightbox-modal-body').innerHTML = this._selectedCard.htmlContent

        //hide the light box
        document.querySelector('.lightbox-modal').classList.remove('show')
    }

    //show the next element on light box
    _showNextElement() {
        const nextIndex     =   this._selectedCard.index + 1 >= this._medias.length ? 
                                0 : 
                                this._selectedCard.index + 1,
              nextMediaId   = this._medias[nextIndex].id;

        this.showLightBox(nextMediaId, nextIndex, this._directoryName)
    }

    //show the previous element on light box
    _showPrevElement() {
        const nextIndex     =   this._selectedCard.index - 1 < 0 ? 
                                this._medias.length + (this._selectedCard.index - 1) : 
                                this._selectedCard.index - 1,
              nextMediaId   = this._medias[nextIndex].id;


        this.showLightBox(nextMediaId, nextIndex, this._directoryName)
    }

    //render the light box
    render() {
        //add click close listener
        this.closeLightboxModalButton()

        //add click next listener
        this.nextElementButtonClick()

        //add click previous listener
        this.prevElementButtonClick()

        //add pres escape to close light box modal
        this.closeLightBoxByKeyboard()

        //add press right arrow to get next element
        this.nextByKeyboardHandler()

        //add press left arrow to get previous element
        this.prevByKeyboardHandler()
    }

}