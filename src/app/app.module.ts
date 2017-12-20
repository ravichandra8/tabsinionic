import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {MoofenderstabPage} from '../pages/moofenderstab/moofenderstab';
import {MoofendersvisitingPage} from '../pages/moofendersvisiting/moofendersvisiting';
import {MoofenderslistPage} from '../pages/moofenderslist/moofenderslist';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoofenderstabPage,
    MoofenderslistPage,
    MoofendersvisitingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoofenderstabPage,
    MoofenderslistPage,
    MoofendersvisitingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
