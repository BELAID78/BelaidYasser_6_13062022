class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
        this.$wrapper = document.createElement('article')
    }

    createPhotographerCard() {
        const photographerCard = `
                                    <img src="assets/photographers/${this._photographer._portrait}">
                                    <h2>${this._photographer._name}</h2>
                                    <div class="photographer_paragraph">
                                        <h4>${this._photographer._city}, ${this._photographer._country}</h4>
                                        <p>${this._photographer._tagline}</p>
                                        <p class="price">${this._photographer._price}€/jour</p>
                                    </div>
                                `

        this.$wrapper.innerHTML = photographerCard

        return this.$wrapper
    }
}