import { CUSTOM_ELEMENTS_SCHEMA, isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AdminModule } from './admin/admin.module';

import { ClientModule } from './client/client.module';

import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { UnsubscribeService } from './base/services/unsubscribe.service';
import { BookEffect } from './state/book/book.effect';
import { bookReducer } from './state/book/book.reducer';
import { categoryReducer } from './state/category/category.reducer';
import { CategoryEffects } from './state/category/category.effects';
import { BaseModule } from './base/base.module';
import { AuthEffects } from './state/auth/auth.effects';
import { authReducer } from './state/auth/auth.reducer';

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        bookKey: bookReducer,
        categoryKey: categoryReducer,
        authKey: authReducer,
      },
      {},
    ),
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BookEffect, CategoryEffects, AuthEffects]),
    AdminModule,
    ClientModule,
    BaseModule,
    RouterModule,
  ],
  providers: [UnsubscribeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
