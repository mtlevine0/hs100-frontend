import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../../device.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent implements OnInit {

  @Input()
  device: Device;

  constructor(public deviceService: DeviceService) { }

  ngOnInit() {
  }

  onTurnOnDevice() {

  }

  onTurnOffDevice() {

  }

  onRemoveDevice() {

  }

}
