import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthModule} from './auth/auth.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HeroesModule,
        AuthModule,
        AppRoutingModule,
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

