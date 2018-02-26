import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ProductListComponent } from './product.list.component';


@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent
  ],
  imports: [
    BrowserModule,
   // NgModel,
    FormsModule /*needed by ngmodel*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }