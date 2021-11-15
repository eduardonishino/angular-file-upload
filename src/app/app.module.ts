import { BrowserModule } from	'@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from 	'@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
declarations: [
	AppComponent,
 FileUploadComponent,

],
imports: [
	BrowserModule,
	HttpClientModule,

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
