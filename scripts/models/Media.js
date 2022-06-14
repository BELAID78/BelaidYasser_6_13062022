class Media {
    constructor(data) {
        this._id                = data.id
        this._photographerId    = data.photographerId
        this._title             = data.title
        this._image             = data.image
        this._likes             = data.likes
        this._date              = data.date
        this._price             = data.price
        this._video             = data.video
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

    get getVideo() {
        return this._video
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