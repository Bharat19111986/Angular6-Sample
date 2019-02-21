import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./NavigationHeader/navbar.component";
import {HomeComponent} from "./NavigationHeader/Home/home.component";
import {AboutComponent} from "./NavigationHeader/About/about.component";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
