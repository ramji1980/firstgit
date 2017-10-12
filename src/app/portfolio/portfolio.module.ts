import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const portfolioRouting = RouterModule.forChild([
    {
        path:'portfolio',
        component:PortfolioComponent
    }
]);

@NgModule ({

    imports:[portfolioRouting],
    declarations:[PortfolioComponent],
    providers:[]
})

export class portfolioModule {}