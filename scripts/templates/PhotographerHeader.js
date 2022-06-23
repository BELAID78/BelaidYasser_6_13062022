class PhotographerHeader {
    constructor(photographer) {
        //photographer data
        this._photographer = photographer

        //photographer header container
        this.$wrapper = document.querySelector('.photograph-header')
    }

    //return photographer header as HTML content
    createPhotographerHeader() {
        return `
            <div class="">
                <h1>${this._photographer._name}</h1>
                <p>${this._photographer._city}, ${this._photographer._country}</p>
                <p>${this._photographer._tagline}</p>
            </div>
            
            <button title="contact me" class="contact_button" onclick="displayModal('${this._photographer._name}')">Contactez-moi</button>
            <div>
                <img alt="${this._photographer._name}" src="assets/photographers/${this._photographer._portrait}"/>
            
        `
    }

    //render the photographer header content
    render() {

        this.$wrapper.innerHTML = this.createPhotographerHeader();

        return ``
    }
}