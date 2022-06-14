class Photographer {
    constructor(data) {
        this._name      = data.name
        this._city      = data.city
        this._country   = data.country
        this._tagline   = data.tagline
        this._price     = data.price
        this._portrait  = data.portrait
        this._id        = data.id
    }

    get getName() {
        return this._name
    }

    get getCity() {
        return this._city
    }

    get getCountry() {
        return this._country
    }

    get getTagline() {
        return this._tagline
    }

    get getPrice() {
        return this._price
    }

    get getPortrait() {
        return this._portrait
    }

    get getId() {
        return $this._id
    }
}