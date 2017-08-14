import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Device } from './device.model';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {
    public baseUrl: string = "http://localhost:8080/api/v1";
    public deviceSelected = new EventEmitter<Device>();
    public deviceList: Device[];

    constructor(private http: Http) {
        this.getDevices();
    }

    // public getDevices(): Observable<Device[]> {
    public getDevices(): Device[] {
            
        // return this.http.get(this.baseUrl + "/Devices")
        //     .map((response: Response) => response.json());

        this.http.get(this.baseUrl + "/Devices")
        .map((response: Response) => response.json())
        .subscribe((data) => this.deviceList = data);

        console.log(this.deviceList);

        return this.deviceList;
    }

    public addDevice(device: Device) {
        DEVICES.push(device);
        // REST service call to HS100 API
        return this.http.post(this.baseUrl + "/Devices", device);
    }

    public removeDevice(device: Device): void {

    }

}