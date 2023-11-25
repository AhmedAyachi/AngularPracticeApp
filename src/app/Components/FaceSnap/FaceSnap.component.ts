import {Component,Input} from "@angular/core";
import FaceSnap from "./FaceSnap";

@Component({
    selector:"face-snap",
    templateUrl:"./FaceSnap.component.html",
    styleUrls:["./FaceSnap.component.scss"]
})

export default class FaceSnapComponent {
    @Input() facesnap!:FaceSnap;
    @Input() btnLabel="increment";
    @Input() increment=true;
    
    snapcount!:number;
    ngOnInit(){
        this.snapcount=this.facesnap.snapcount||0;
    }
    onAddSnap(){
        this.snapcount+=this.increment?1:-1;
    }
}
