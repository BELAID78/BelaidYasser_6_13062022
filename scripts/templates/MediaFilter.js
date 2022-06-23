class MediaFilter {
    constructor(medias, photographer) {
        //media data
        this._medias        = medias

        //photgrapher data
        this._photographer  = photographer

        //media contaienr
        this.$wrapper       = document.querySelector('.media-filter-container')

        //all media possible directory !
        this.directoriesName= [
            'Ellie Rose',
            'Marcel',
            'Mimi',
            'Nabeel',
            'Rhode',
            'Tracy',
        ]

        //default directory name
        this._mediasDirectoryName = '';

        //default directory name
        this._totalLikes = 0

        //default selected properties
        this._select = {
            opened: false,
            options: [
                'Popularité', 'Date', 'Titre'
            ],
            selected: 'Popularité' 
        }

        //initialize lightbox
        this._lightboxModal = new LightboxModal(this._medias);

    }

    //create total likes HTML content
    createTotalLikes(totalLikes, price) {

        //Generate total likes HTML content
        const totalLikesWrapper = `
            <div class="total-likes-container">
                <div>
                    <span class="total-likes">${totalLikes}</span>
                    <span><i class="fas fa-heart solid"></i></span>
                </div>
                <div>
                    <span>${price} € / jour</span>
                </div>
            </div>
        `;

        //add total likes HTML content to page
        document.body.innerHTML += totalLikesWrapper;
    }

    //define the filter type
    filterBy(filterType, data) {
        data.sort( (a,b) => {
            switch(filterType) {
                //sort by Popularite (likes)
                case 'Popularité'   : return b.likes - a.likes;
                //sort by date
                case 'Date'         :
                    if(new Date(b.date) > new Date(a.date)){
                    return 1
                }
                    if(new Date(b.date) <  new Date(a.date)){
                    return -1
                    }
                    return 0
                //sort by Titre (title)
                case 'Titre'        :
                    if(a.title > b.title){
                    return 1
                    }
                    if((a.title < b.title )){
                    return -1
                }
                    return 0

            }
        })

        return data
    }

    //get the total likes
    getTotalLikes() {
        //default likes is 0
        let totalLikesCount = 0;

        //sum the likes
        this._medias.map(media => {
            totalLikesCount += media.likes
        });

        //return the total likes
        return totalLikesCount
    }

    //create medias
    createMedias() {
        //get photographe name
        const photographerName  =   this.directoriesName.find(
                                        name => this._photographer._name.replace('-', ' ').includes(name)
                                    );

        //init media directory folder
        this._mediasDirectoryName = photographerName;

        //inisialize media and filter value
        let mediaContent        =   ``,
            filterValue         = this._select.selected;

        //execute filter function by choser the filter type
        this._medias = this.filterBy(filterValue, this._medias);

        //create media content by MediaFactory
        this._medias.map(media => {

            //creat media data by constructor
            let mediaData = new Media(media)

            //creat media content
            mediaContent += new MediaFactory(mediaData, photographerName).render()

           
        });

            //render the total likes content to page
            this._totalLikes =
        this.getTotalLikes()

        return mediaContent
    }

    //click on like handler
    clickLikeHandler() {
        //get all heart icons
        const LikeButtons = document.querySelectorAll('.like-count .fa-heart')

        //zdd or remove 1 from likes and total likes
        LikeButtons.forEach(likeButton => {
            //add click listener on heart icons
            likeButton.addEventListener('click', e => {
                const   parentLikeButton = e.target.parentElement,
                        likeTotal        = parentLikeButton.querySelector('span')

                if(parentLikeButton.classList.contains('active')) {
                    //if wee clicked before we sub 1 from like and total likes
                    parentLikeButton.classList.remove('active')
                    likeTotal.innerText = parseInt(likeTotal.innerText) - 1
                    this._totalLikes -= 1
                }else {
                    //if we never clicked before we add 1 from like and total likes
                    parentLikeButton.classList.add('active')
                    likeTotal.innerText = parseInt(likeTotal.innerText) + 1
                    this._totalLikes += 1
                }

                //show total likes
                document.querySelector('.total-likes').innerHTML = this._totalLikes
            })
        });

    }

    //create <select> filter
    createSelectFilter() {
        let options = ``;

        //create filter
        this._select.options.forEach(option => {
            options += `<option value="${option}" ${this._select.selected === option ? 'selected' : ''} >${option}</option>`
        });

        //return the filter content
        return `
            <div class="select-container">
                <select id="Order-by" title="Order by">
                    ${options}
                </select>
            </div>
        `
    }

    //re-render the medias and it's event's when we change the filter of the medias
    reRenderMedias() {
        //initialize the media content
        document.querySelector('.media-filter-container').innerHTML = '';

        //get current media content
        this.$wrapper = document.querySelector('.media-filter-container');

        //create filter
        this.$wrapper.innerHTML = this.createMediaFilter();

        //add filter change event
        this.selectFilterChange()

        //add click on media handler
        this.clickOnMediaHandler()

        //render the light box
        this._lightboxModal.render()

        //add click on like handler
        this.clickLikeHandler()

        //render the total likes
        document.querySelector('.total-likes').innerHTML = this._totalLikes
    }

    //add change event of filter
    selectFilterChange() {
        document.querySelector('select').addEventListener('change', (e) => {

            //get the filter value
            this._select.selected = e.target.value;

            //re-render the media content
            this.reRenderMedias()
        });
    }


    //return media filter and media content
    createMediaFilter() {
        return `
            <div class="filter">
                <label for="Order-by"> Trier par</label>
                ${this.createSelectFilter()}
            </div>
            <div class="media-content">
                ${this.createMedias()}
            </div>
        `
    }

    //add click event listener on media
    clickOnMediaHandler() {
        //get all the clickable medias
        const mediasCanBeClicked = document.querySelectorAll('.show-in-light-box')

        //add event listener on all the clickable media
        mediasCanBeClicked.forEach( (media, index) => {
            const mediaId       = media.getAttribute('media-id'),
                  mediaIndex    = index;

            media.addEventListener('click', () => {
                this._lightboxModal.showLightBox(mediaId, mediaIndex, this._mediasDirectoryName);
            });
        })
    }

    //render the media content
    render() {
        this.$wrapper.innerHTML = this.createMediaFilter();

        //render total likes
        this.createTotalLikes(this._totalLikes, this._photographer._price);

        //add change filter event
        this.selectFilterChange()

        //add click on like handler
        this.clickOnMediaHandler()
        
        //add click on licke handler
        this.clickLikeHandler()

        //render the light box
        this._lightboxModal.render()
    }
}