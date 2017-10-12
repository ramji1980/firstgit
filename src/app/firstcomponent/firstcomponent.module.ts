import {ModuleWithProviders,NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import {FirstcomponentComponent} from './firstcomponent.component';

const firstRouting : ModuleWithProviders = RouterModule.forChild([
    {
        path:'',
        component:FirstcomponentComponent

    }
]);

@NgModule({
    imports:[
        firstRouting 
    ],
    declarations:[
        FirstcomponentComponent
    ],
    providers:[]
})
export class firstModule {}