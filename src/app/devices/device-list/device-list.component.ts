import { Component, OnInit } from '@angular/core';

import { Device } from '../../device.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  selectedRow: number = 0;

  deviceList:Device[];
  device: Device;

  constructor(public deviceService:DeviceService) { }

  ngOnInit() {
    this.deviceService.deviceSelected.emit(this.deviceList[0])
    this.deviceService.getDevices().subscribe(
      (device: Device) => {
        this.device = device;
      }
    )
    console.log(this.device);
  }

  onSelectDevice(index) {
    this.selectedRow = index;
    this.deviceService.deviceSelected.emit(this.deviceList[index]);
  }

}
