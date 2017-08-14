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

  constructor(public deviceService:DeviceService) { }

  ngOnInit() {
    // this.deviceService.getDevices().subscribe((data) => this.deviceList = data);

    this.deviceList = this.deviceService.getDevices();//.subscribe((data) => this.deviceList = data);    
    
    this.deviceService.deviceSelected.emit(new Device("testing name", "1234"));
  }

  onSelectDevice(index) {
    this.selectedRow = index;
    this.deviceService.deviceSelected.emit(this.deviceList[index]);
  }

}
