class ImageMedia {
    constructor(media, photographerName, tabindex, index) {
        //media data
        this._media = media

        //photographer name
        this._photographerName = photographerName

        this.tabindex = tabindex

        this.index = index
    }

    //create media image HTML content
    render() {
        return `
                <div>
                <div class="over-flow-the-image">
                <a tabindex="${this.tabindex}" index=${this.index} class="triger-click"><img alt="${this._media._title}" title="${this._media._title}" class="show-in-light-box" media-id="${this._media._id}" src="assets/media/${this._photographerName}/${this._media._image}" /></a>
            </div>
                    <div class="likes-title-photographer">
                        <p>${this._media._title}</p>
                        <p class="like-count">
                            <span>${this._media._likes}</span>
                            <i tabindex="${this.tabindex + 1}" aria-label="likes" class="far fa-heart light"></i>
                            
                        </p>
                    </div>
                </div>
            `
    }
}