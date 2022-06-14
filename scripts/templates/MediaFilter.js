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
        this._totalLikes = 0
    }

    createTotalLikes(totalLikes, price) {
        const totalLikesWrapper = `
            <div class="total-likes-container">
                <div>
                    <span>${totalLikes}</span>
                    <span>icon</span>
                </div>
                <div>
                    <span>${price} € / jour</span>
                </div>
            </div>
        `;

        document.body.innerHTML += totalLikesWrapper;
    }

    createMedias() {
        let mediaContent = ``;
        const photographerName = this.directoriesName.find(name => this._photographer._name.replace('-', ' ').includes(name))
        let filterValue = 'date';

        this._medias.
        sort( (a,b) => {
            switch(filterValue) {
                case 'likes'    : return a.likes - b.likes;
                case 'date'     : return new Date(a.date) > new Date(b.date) ? 1 : (new Date(a.date) < new Date(b.date) ? -1 : 0);
                case 'titre'    : return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
            }
        })
        .map(media => {
            let mediaData = new Media(media)
            mediaContent += new MediaFactory(mediaData, photographerName).render()
            this._totalLikes += media.likes
        });

        return mediaContent
    }

    createSelectFilter() {
        return `
            <div class="">
            </div>
        `
    }

    createMediaFilter() {
        return `
            <div class="filter">
                <p>Trier par</p>
                ${this.createSelectFilter()}
            </div>
            <div class="media-content">
                ${this.createMedias()}
            </div>
        `
    }

    render() {
        this.$wrapper.innerHTML = this.createMediaFilter();
        this.createTotalLikes(this._totalLikes, this._photographer._price);
    }
}