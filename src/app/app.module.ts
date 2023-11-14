import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCiwYQcY0QArR3aCMYhrdA5GwM0E0JqPMI",
      authDomain: "sample-project-2fce4.firebaseapp.com",
      projectId: "sample-project-2fce4",
      storageBucket: "sample-project-2fce4.appspot.com",
      messagingSenderId: "880784616041",
      appId: "1:880784616041:web:d21ad0beba443c4319d0f8"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
