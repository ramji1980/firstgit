import {ModuleWithProviders,NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import { ServicesComponent } from './services.component';

const comserviceRouting : ModuleWithProviders = RouterModule.forChild([

    {
        path:'services',
        component:ServicesComponent
    }    

]);

@NgModule({ 
    imports:
    [comserviceRouting],
    declarations:[ServicesComponent],
    providers:[]
})

export class servicesModule {}

