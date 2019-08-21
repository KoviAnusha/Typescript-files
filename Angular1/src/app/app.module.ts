import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { WitheventsComponent } from './withevents/withevents.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { IfcompComponent } from './ifcomp/ifcomp.component';
import { ForcompComponent } from './forcomp/forcomp.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversepipePipe } from './reversepipe.pipe';
import { AppRoutesModule } from './app-routes.module'
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { MessagingappComponent } from './messagingapp/messagingapp.component' //to get ngmodel directive
import {SampleModule} from './sample/sample.module';
import { WorkwithhttpComponent } from './workwithhttp/workwithhttp.component';
import { HttpClientModule} from '@angular/common/http';
import { PromisesComponent } from './promises/promises.component';

@NgModule({ // one ngmodule is called one project
  declarations: [ //components we add
    AppComponent,
    FirstComponent,
    WitheventsComponent,
    RegistrationComponent,
    IfcompComponent,
    ForcompComponent,
    PipeComponent,
    ReversepipePipe,
    ProductsComponent,
    AboutComponent,
    ErrorComponent,
    MessagingappComponent,
    WorkwithhttpComponent,
    PromisesComponent,
  ],
  imports: [ //external components which are installed and added
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    SampleModule,HttpClientModule
  ],
  providers: [], // any extra customizations or services
  bootstrap: [ AppComponent]
})
export class AppModule {
  
 }
