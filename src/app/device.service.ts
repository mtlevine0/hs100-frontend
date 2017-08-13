import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Device } from './device.model';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {
    public baseUrl: string = "http://localhost:8080/api/v1";
    public deviceSelected = new EventEmitter<Device>();

    constructor(private http: Http) {}

    public getDevices(): Observable<Device[]> {

        return this.http.get(this.baseUrl + "/Devices")
            .map(
                (response: Response) => response.json()
            );

        // console.log(data);

        // return DEVICES.slice();
    }

    public addDevice(device: Device) {
        DEVICES.push(device);
        // REST service call to HS100 API
        return this.http.post(this.baseUrl + "/Devices", device);
    }

    public removeDevice(device: Device): void {

    }

}