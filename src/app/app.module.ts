import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceControlComponent } from './devices/device-control/device-control.component';
import { HeaderComponent } from './header/header.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DevicesComponent } from './devices/devices.component';

import { DeviceService } from './device.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceControlComponent,
    HeaderComponent,
    DeviceEditComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
