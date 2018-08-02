import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalModule } from 'ng2-bs3-modal';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { jQuery } from '@types/jquery';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlertasComponent } from './alertas/alertas.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { MyCurrencyPipe } from './my-currency.pipe';
import { MyCurrencyFormatterDirective } from './my-currency-formatter.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlertasComponent,
    NotFoundComponent,
    SearchFilterPipe,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    NgxPaginationModule,
    BsModalModule,
    Ng2BootstrapModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
