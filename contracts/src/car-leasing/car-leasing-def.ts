
import { Object, Property } from 'fabric-contract-api';
import { Participant } from '../participants/participant-def';

@Object()
export class Car {

    @Property()
    public manufacturer: Participant;

    @Property()
    public model: string;

    @Property()
    public colour: string;

    @Property()
    public owner: Participant;

    @Property()
    public VIN: string

    constructor(manufacturer: Participant, model: string, colour: string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.colour = colour;
        this.owner = manufacturer;
    }

    serialize():Buffer {
        return Buffer.from(JSON.stringify(this));
    }
}