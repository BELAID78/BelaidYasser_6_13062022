class PhotographerPage {

    constructor() {
        //photographers id
        this.searchId   = this._getPhotographerId()

        //data API
        this.dataApi    = new Api('data/photographers.json')
    }

    //return the photographers id
    _getPhotographerId() {
        let currentUrl = new URL(location),
            searchParameters = currentUrl.searchParams,
            photographerId = parseInt(searchParameters.get('id'));
    
        return photographerId
    }

    //render the photographer detail page 
    async render() {
        
        //get photographers and media
        const data                  = await this.dataApi.get()

        //get current photographer
        const photographer          = data.photographers.find(photographerItem => photographerItem.id == this.searchId)

        //get the medias of current photographer
        const medias                = data.media.filter(media => media.photographerId == this.searchId);

        //create photographer header by using photographerHeader template and Photographer contstructor
        const photographerHeader    = new PhotographerHeader(new Photographer(photographer))

        //render the photographer header
        photographerHeader.render()

        //render the filter and photographers medias
        new MediaFilter(medias, new Photographer(photographer)).render()
     
        //add contact modal template
        let contactModal = new Contact()

        contactModal.render()
    }
}

//create photographer page
const photographerPage = new PhotographerPage();

//render photographer page
photographerPage.render();