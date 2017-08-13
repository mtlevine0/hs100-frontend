export class Device {
    constructor(
        public name: string,
        public ip: string,
        public id?: number,
        public state?: boolean
    ) {}
}