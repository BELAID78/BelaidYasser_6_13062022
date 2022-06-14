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

        this._select = {
            opened: false,
            options: [
                'likes', 'date', 'title'
            ],
            selected: 'likes' 
        }
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

    filterBy(filterType, data) {
        data.sort( (a,b) => {
            switch(filterType) {
                case 'likes'    : return a.likes - b.likes;
                case 'date'     : return new Date(a.date) > new Date(b.date) ? 1 : (new Date(a.date) < new Date(b.date) ? -1 : 0);
                case 'title'    : return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
            }
        })

        return data
    }

    createMedias() {
        const photographerName  =   this.directoriesName.find(
                                        name => this._photographer._name.replace('-', ' ').includes(name)
                                    );
        let mediaContent        =   ``,
            filterValue         = this._select.selected;

        this._medias = this.filterBy(filterValue, this._medias);

        this._medias.map(media => {
            let mediaData = new Media(media)

            mediaContent += new MediaFactory(mediaData, photographerName).render()

            this._totalLikes += media.likes
        });

        return mediaContent
    }

    createSelectFilter() {
        let options = ``;

        this._select.options.forEach(option => {
            options += `<option value="${option}" ${this._select.selected === option ? 'selected' : ''} >${option}</option>`
        });

        return `
            <div class="select-container">
                <select>
                    ${options}
                </select>
            </div>
        `
    }

    reRenderMedias() {
        //document.querySelector('select').removeEventListener('change')

        //remove the media content
        document.querySelector('.media-filter-container').innerHTML = '';

        this.$wrapper = document.querySelector('.media-filter-container');

        //re render
        this.$wrapper.innerHTML = this.createMediaFilter();

        this.selectFilterChange()
    }

    selectFilterChange() {
        document.querySelector('select').addEventListener('change', (e) => {

            this._select.selected = e.target.value;

            this.reRenderMedias()
        });
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
        this.selectFilterChange()
    }
}