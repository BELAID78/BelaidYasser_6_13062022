class PhotographerPage {

    constructor() {
        this._searchId = location.search.replace('?id=','');
    }

    init() {
        console.log(this._searchId)
    }
}

const photographerPage = new PhotographerPage();

photographerPage.init();