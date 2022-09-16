import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './pagina/components/header/header.component';
import { SidebarComponent } from './pagina/components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    StartComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
