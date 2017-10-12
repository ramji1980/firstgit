import {ModuleWithProviders,NgModule} from '@angular/core';

import { RouterModule} from '@angular/router';

import { AboutusComponent} from './aboutus.component';

const aboutusRouting : ModuleWithProviders =  RouterModule.forChild([
{
    path:'aboutus',
    component:AboutusComponent
}

]);

@NgModule({
    
    imports:
    [
        aboutusRouting
    ],
    declarations:
        [
            AboutusComponent
        ],
    providers:[]
})

export class aboutusModule{}