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

        this._mediasDirectoryName = '';

        this._totalLikes = 0

        this._select = {
            opened: false,
            options: [
                'likes', 'date', 'title'
            ],
            selected: 'likes' 
        }

        this._lightboxModal = new LightboxModal(this._medias);

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
                case 'likes'    : return b.likes - a.likes;
                case 'date'     : return new Date(b.date) > new Date(a.date) ? 1 : (new Date(b.date) <  new Date(a.date) ? -1 : 0);
                case 'title'    : return b.title > a.title ? 1 : (b.title < a.title ? -1 : 0);
            }
        })

        return data
    }

    createMedias() {
        const photographerName  =   this.directoriesName.find(
                                        name => this._photographer._name.replace('-', ' ').includes(name)
                                    );

        this._mediasDirectoryName = photographerName;

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

    clickLikeHandler() {
        const LikeButtons = document.querySelectorAll('.like-count .fa-heart')

        LikeButtons.forEach(likeButton => {
            likeButton.addEventListener('click', e => {
                const   parentLikeButton = e.target.parentElement,
                        likeTotal        = parentLikeButton.querySelector('span')

                if(parentLikeButton.classList.contains('active')) {
                    parentLikeButton.classList.remove('active')
                    likeTotal.innerText = parseInt(likeTotal.innerText) - 1
                }else {
                    parentLikeButton.classList.add('active')
                    likeTotal.innerText = parseInt(likeTotal.innerText) + 1
                }
            })
        });

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
        document.querySelector('.media-filter-container').innerHTML = '';

        this.$wrapper = document.querySelector('.media-filter-container');

        this.$wrapper.innerHTML = this.createMediaFilter();

        this.selectFilterChange()

        this.clickOnMediaHandler()

        this._lightboxModal.render()
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

    clickOnMediaHandler() {
        const mediasCanBeClicked = document.querySelectorAll('.show-in-light-box')

        mediasCanBeClicked.forEach( (media, index) => {
            const mediaId       = media.getAttribute('media-id'),
                  mediaIndex    = index;

            media.addEventListener('click', () => {
                this._lightboxModal.showLightBox(mediaId, mediaIndex, this._mediasDirectoryName);
            });
        })
    }

    render() {
        this.$wrapper.innerHTML = this.createMediaFilter();
        this.createTotalLikes(this._totalLikes, this._photographer._price);
        this.selectFilterChange()
        this.clickOnMediaHandler()
        this.clickLikeHandler()
        this._lightboxModal.render()
    }
}