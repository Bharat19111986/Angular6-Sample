import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import {HomeComponent} from "./NavigationHeader/Home/home.component";
import {AboutComponent} from "./NavigationHeader/About/about.component";


const rootModule: RootModule = {
    states: [
        {
            name:'home',
            url:'/',
            component:HomeComponent

        },
        {
            name:'about',
            url:'/about',
            component:AboutComponent

        }
    ],
    useHash: true
};

@NgModule({
    imports: [UIRouterModule.forRoot(rootModule)],
    exports: [UIRouterModule]
})
export class AppRoutingModule { }
