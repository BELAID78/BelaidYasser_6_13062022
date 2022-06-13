class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return  fetch(this._url).
                then(response => response.json()).
                catch(error => console.log('une erreur se produit', error))
    }
}