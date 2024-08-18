import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AdminModule } from './admin/admin.module';
import { BookEffect } from './admin/state/book.effect';
import { bookReducer } from './admin/state/book.reducer';
import { ClientModule } from './client/client.module';
import { BaseComponent } from './base/base.component';
import { UnsubscribeService } from './base/services/unsubscribe.service';

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ bookKey: bookReducer }, {}),
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BookEffect]),
    AdminModule,
    ClientModule,
  ],
  providers: [UnsubscribeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
