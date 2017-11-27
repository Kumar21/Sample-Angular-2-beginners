import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {Video} from "./video";
import  {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {

    mainHeading = Config.Main_Heading;

    videos:Array<Video>;

    constructor(){
        this.videos=[
            new Video(1,"fagsdfasdf cdsc","VideoCode1","VideoDescp1"),
            new Video(2,"fagsdfasdf das","VideoCode2 ","VideoDescp2")

        ]
    }
}
