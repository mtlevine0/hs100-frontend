import { Device } from './device.model';

export let DEVICES:Device[] = [
    new Device("Warning Light", "192.168.1.1", 1, false),
    new Device("Box Fan", "192.168.1.2", 2, false),
    new Device("Office Light", "192.168.1.3", 3, false)
]