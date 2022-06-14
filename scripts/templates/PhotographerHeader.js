class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer
        this.$wrapper = document.querySelector('.photograph-header')
    }

    createPhotographerHeader() {
        return `
            <div class="">
                <h1>${this._photographer._name}</h1>
                <p>${this._photographer._city}, ${this._photographer._country}</p>
                <p>${this._photographer._tagline}</p>
            </div>
            <div class="">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div>
                <img src="assets/photographers/${this._photographer._portrait}"/>
            </div>
        `
    }

    render() {

        this.$wrapper.innerHTML = this.createPhotographerHeader();

        return ``
    }
}