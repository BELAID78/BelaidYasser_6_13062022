class MediaFactory {

    //return imageMedia template or VideoMedia template by data have image or video
    constructor(data, photographerName) {
        if(data._image != undefined) {

    //create new imageMedia object and return it
            return new ImageMedia(data, photographerName)
        }else{
    //create new VideoMedia object and return it
            return new VideoMedia(data, photographerName)
        }
    }
} 