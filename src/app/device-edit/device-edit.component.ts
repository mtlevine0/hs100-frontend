import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  constructor(public deviceService: DeviceService) { }

  ngOnInit() {
  }

  onAddDevice(device: NgForm) {
    console.log("Device Added!");
    console.log(device.value);
    var tempDevice = new Device(device.value.name, device.value.ip);
    console.log(tempDevice);
    this.deviceService.addDevice(tempDevice).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
