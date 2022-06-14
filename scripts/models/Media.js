class Media {
    constructor(data) {
        this._id            = data.id
        this.photographerId = data.photographerId
        this.title          = data.title
        this.image          = data.image
        this.likes          = data.likes
        this.date           = data.date
        this.price          = data.price
    }

    get getId() {
        return this._id
    }

    get getPhotographerId() {
        return this._photographerId
    }

    get getTitle() {
        return this._title
    }

    get getImage() {
        return this._image
    }

    get getLikes() {
        return this._likes
    }

    get getDate() {
        return this._date
    }

    get getPrice() {
        return this._price
    }
}