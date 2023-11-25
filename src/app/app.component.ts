import {Component,Input} from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title="myApp";
    facesnaps=[
        {
            title:"title 1",
            date:"2023/02/11",
            description:"description 1",
            image:"assets/Images/Img_0.jpeg",
            location:"location 1",
        },
        {
            title:"title 2",
            date:"2023/12/05",
            description:"description 2",
            image:"assets/Images/Img_1.jpeg",
        },
    ]
    /* onAddSnap() {
        console.log("hello");
    } */
}
