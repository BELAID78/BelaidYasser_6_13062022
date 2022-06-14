class MediaFilter {
    constructor(medias, photographer) {
        this._medias        = medias
        this._photographer  = photographer
        this.$wrapper       = document.querySelector('.media-filter-container')
        this.directoriesName= [
            'Ellie Rose',
            'Marcel',
            'Mimi',
            'Nabeel',
            'Rhode',
            'Tracy',
        ]
    }

    createMedias() {
        let mediaContent = ``;
        const photographerName = this.directoriesName.find(name => this._photographer._name.includes(name))
        
        this._medias.
        map(media => {
            let mediaData = new Media(media)
            mediaContent += new MediaFactory(mediaData, photographerName).render()
        });

        return mediaContent
    }

    createFilter() {
        return `
            <div class="">
            </div>
        `
    }

    createMediaFilter() {
        return `
            <div class="filter">
                <p>Trier par</p>
                ${this.createFilter()}
            </div>
            <div class="media-content">
                ${this.createMedias()}
            </div>
        `
    }

    render() {
        this.$wrapper.innerHTML = this.createMediaFilter();
    }
}