class VideoMedia {
    constructor(media, photographerName) {

        //media data
        this._media = media

        //photographer name
        this._photographerName = photographerName
        
        this.tabindex = 0
    }

    //create video media HTML content
    render() {
        return `
                <div>
                    <div class="over-flow-the-image">
                        <video tabindex="${this.tabindex}" alt= "${this._media._title}" class="show-in-light-box" media-id="${this._media._id}" src="assets/media/${this._photographerName}/${this._media._video}">
                            Your browser does not support the HTML5 Video element.
                        </video>
                    </div>
                    
                    <div class="likes-title-photographer">
                        <p>${this._media._title}</p>
                        <p class="like-count">
                            <span>${this._media._likes}</span>
                            <i aria-label="Like" class="fas fa-heart solid"></i>
                            <i aria-label="like" class="far fa-heart light"></i>
                        </p>
                    </div>
                </div>
            `
    }
}