class Media {
    constructor(data) {
        //media id
        this._id                = data.id

        //photographer id
        this._photographerId    = data.photographerId

        //media title
        this._title             = data.title

        //media image
        this._image             = data.image

        //media likes
        this._likes             = data.likes

        //media date
        this._date              = data.date

        //media price
        this._price             = data.price

        //media video
        this._video             = data.video
    }

    //get media id
    get getId() {
        return this._id
    }

    //getr photographer id
    get getPhotographerId() {
        return this._photographerId
    }

    //get media title
    get getTitle() {
        return this._title
    }
    //get media image
    get getImage() {
        return this._image
    }

    //get media likes
    get getLikes() {
        return this._likes
    }
    
    //get media date
    get getDate() {
        return this._date
    }
    
    //get media price
    get getPrice() {
        return this._price
    }
    
    //get media video
    get getVideo() {
        return this._video
    }
    
}