import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./navbar.component";
import {HomeComponent} from "./Home/home.component";
import {AboutComponent} from "./About/about.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NavBarComponent,
        HomeComponent,
        AboutComponent
    ]
})
export class NavBarModule { }
