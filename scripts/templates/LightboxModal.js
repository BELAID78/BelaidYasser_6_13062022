class LightboxModal {
    constructor(medias)
    {
        this._medias = medias

        this._selectedCard = {
            opened      : false,
            selected    : '',
            htmlContent : '',
            selectedId  : null
        }

        this._directoryName = '';

        this.hideLightBoxHandler = this.hideLightBox.bind(this)
        this._showNextElementHandler = this._showNextElement.bind(this)
        this._showPrevElementHandler = this._showPrevElement.bind(this)
    }

    closeLightboxModalButton() {
        document.querySelector('.lightbox-close').addEventListener('click', this.hideLightBoxHandler)
    }

    nextElementButtonClick() {
        document.querySelector('.lightbox-modal-arrow-right').addEventListener('click', this._showNextElementHandler)
    }

    prevElementButtonClick() {
        document.querySelector('.lightbox-modal-arrow-left').addEventListener('click', this._showPrevElementHandler)
    }

    showLightBox(mediaId, index, directoryName) {

        this._directoryName = directoryName

        //remove body scroll
        document.body.classList.add('has-open-lightbox')

        //show the lightbox
        this._selectedCard = {
            opened      : true,
            htmlContent : this.generateLightboxHtmlContent(mediaId, directoryName),
            selectedId  : mediaId,
            index       : index
        }

        document.querySelector('.lightbox-modal-body').innerHTML = this._selectedCard.htmlContent

        document.querySelector('.lightbox-modal').classList.add('show')

    }

    generateLightboxHtmlContent(id, directoryName) {
        
        let selectedMedia = this._medias.find(media => media.id == id)

        return selectedMedia.image !== undefined ? 
                `<img src="assets/media/${directoryName}/${selectedMedia.image}" /><span>${selectedMedia.title}</span>` : 
                `<video controls src="assets/media/${directoryName}/${selectedMedia.video}">
                    Your browser does not support the HTML5 Video element.
                </video><span>${selectedMedia.title}</span>`
    }

    emptyLightBoxHtmlContent() {
        return ``
    }

    hideLightBox() {

        console.log(this)
        //add the body scroll
        document.body.classList.remove('has-open-lightbox')
        
        //hide lightbox
        this._selectedCard = {
            opened      : false,
            htmlContent : this.emptyLightBoxHtmlContent(),
            selectedId  : null
        }

        document.querySelector('.lightbox-modal-body').innerHTML = this._selectedCard.htmlContent

        document.querySelector('.lightbox-modal').classList.remove('show')
    }

    _showNextElement() {
        const nextIndex     =   this._selectedCard.index + 1 >= this._medias.length ? 
                                0 : 
                                this._selectedCard.index + 1,
              nextMediaId   = this._medias[nextIndex].id;

        this.showLightBox(nextMediaId, nextIndex, this._directoryName)
    }

    _showPrevElement() {
        const nextIndex     =   this._selectedCard.index - 1 < 0 ? 
                                this._medias.length + (this._selectedCard.index - 1) : 
                                this._selectedCard.index - 1,
              nextMediaId   = this._medias[nextIndex].id;


        this.showLightBox(nextMediaId, nextIndex, this._directoryName)
    }

    render() {
        this.closeLightboxModalButton()
        this.nextElementButtonClick()
        this.prevElementButtonClick()
    }
}