import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';

import {AuthGuard} from './auth/auth.guard';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';

const appRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
        data: {preload: true}
    },
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers:  [SelectivePreloadingStrategyService]
})
export class AppRoutingModule {
}
