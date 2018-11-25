import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        CrisisCenterModule,
        AdminModule,
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ComposeMessageComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

