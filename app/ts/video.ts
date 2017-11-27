export class Video{
    id : number;
    description : string;
    link:string;
    videoCode:string;

    constructor( id:number, link:string,videoCode:string, description:string ){

        this.id=id;
        this.description=description;
        this.link=link;
        this.videoCode=videoCode;
    }

}