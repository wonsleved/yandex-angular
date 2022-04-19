import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { ServicesContentComponent } from './services-content/services-content.component';
import { SearchComponent } from './search/search.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PlateComponent } from './plate/plate.component';
import { FooterLineComponent } from './footer-line/footer-line.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    AsideMenuComponent,
    ServicesContentComponent,
    SearchComponent,
    WidgetsListComponent,
    PageContentComponent,
    PlateComponent,
    FooterLineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
