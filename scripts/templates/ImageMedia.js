class ImageMedia {
    constructor(media, photographerName) {
        this._media = media
        this._photographerName = photographerName
    }

    render() {
        return `
                <div>
                    <img src="assets/media/${this._photographerName}/${this._media._image}" />
                    
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