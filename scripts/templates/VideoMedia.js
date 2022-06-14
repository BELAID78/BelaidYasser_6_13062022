class VideoMedia {
    constructor(media, photographerName) {
        this._media = media
        this._photographerName = photographerName
    }

    render() {
        return `
                <div>
                    <div class="over-flow-the-image">
                        <video class="show-in-light-box" media-id="${this._media._id}" src="assets/media/${this._photographerName}/${this._media._video}">
                            Your browser does not support the HTML5 Video element.
                        </video>
                    </div>
                    
                    <div class="likes-title-photographer">
                        <p>${this._media._title}</p>
                        <p class="like-count">
                            <span>${this._media._likes}</span>
                            <i class="fas fa-heart solid"></i>
                            <i class="fal fa-heart light"></i>
                        </p>
                    </div>
                </div>
            `
    }
}