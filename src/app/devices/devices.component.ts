import { Component, OnInit } from '@angular/core';

import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  deviceSelected: Device;

  constructor(public deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.deviceSelected.subscribe(
      (device: Device) => {
        this.deviceSelected = device;
      }
    )
  }

}
