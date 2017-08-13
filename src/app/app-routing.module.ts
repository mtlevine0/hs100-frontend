import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/devices', pathMatch: 'full'},
    { path: 'devices', component: DevicesComponent},
    { path: 'device-edit', component: DeviceEditComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}