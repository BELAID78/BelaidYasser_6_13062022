class MediaFactory {

    //return imageMedia template or VideoMedia template by data have image or video
    constructor(data, photographerName, index) {
        if(data._image != undefined) {
            //create new imageMedia object and return it
            return new ImageMedia(data, photographerName, index)
        }else{
            //create new VideoMedia object and return it
            return new VideoMedia(data, photographerName, index)
        }
    }
} 