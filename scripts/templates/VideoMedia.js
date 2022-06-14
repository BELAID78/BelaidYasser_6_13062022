class VideoMedia {
    constructor(media, photographerName) {
        this._media = media
        this._photographerName = photographerName
    }

    render() {
        return `
                <div>
                    <video controls="controls" src="assets/media/${this._photographerName}/${this._media._video}">
                        Your browser does not support the HTML5 Video element.
                    </video>
                    
                    <div>
                        <p>${this._media._title}</p>
                        <p>
                            <span>${this._media._likes}</span>
                            <i></i>
                        </p>
                    </div>
                </div>
            `
    }
}