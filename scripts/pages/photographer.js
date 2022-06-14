class PhotographerPage {

    constructor() {
        this.searchId   = location.search.replace('?id=','')
        this.dataApi    = new Api('/data/photographers.json')
    }

    async init() {
        const data                  = await this.dataApi.get()
        const photographer          = data.photographers.find(photographer => photographer.id == this.searchId)
        const medias                = data.media.filter(media => media.photographerId == this.searchId);
        const photographerHeader    = new PhotographerHeader(new Photographer(photographer))

        photographerHeader.render()

        new MediaFilter(medias, new Photographer(photographer)).render()
        
    }
}

const photographerPage = new PhotographerPage();

photographerPage.init();