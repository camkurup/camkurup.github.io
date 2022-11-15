import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    TableDataComponent,
    DialogComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
