class PhotographerCard {
        //init the photographer card
    constructor(photographer) {

       //photographer data
        this._photographer = photographer

        //photographer card container
        this.$wrapper = document.createElement('article')
    }
        //add click event listner to photgrapher image
    onCardImageClick() {
        this.$wrapper.querySelector('img').addEventListener('click', () => {
            location.href = 'photographer.html?id=' + this._photographer._id
        });
    }
        //add click event listener to photographer name
    onCardNameClick() {
        this.$wrapper.querySelector('h2').addEventListener('click', () => {
            location.href = 'photographer.html?id=' + this._photographer._id
        });
    }

        //create Photographer Card container
    createPhotographerCard(tab) {

        //create photographer card html content
        const photographerCard = `
                                    <a href="photographer.html?id=${this._photographer._id}" tabindex="${tab}">
                                    <img alt= "${this._photographer._name} image" title="${this._photographer._name}" src="assets/photographers/${this._photographer._portrait}">
                                     <h2 title="${this._photographer._name}">${this._photographer._name}</h2>
                                    <div class="photographer_paragraph">
                                        <h4>${this._photographer._city}, ${this._photographer._country}</h4>
                                        <p>${this._photographer._tagline}</p>
                                        <p class="price">${this._photographer._price}€/jour</p>
                                    </div></a>
                                `
        //append the photographer card html content to container
        this.$wrapper.innerHTML = photographerCard

        //add click event on photographer image
        this.onCardImageClick();

        //add click event on photographer name
        this.onCardNameClick();

        //return the container
        return this.$wrapper
    }
}