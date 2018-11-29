import { Object, Property } from 'fabric-contract-api';

export enum ParticipantTypes {
    REGULATOR = 1,
    MANUFACTURER,
    LEASING_COMPANY,
    SCRAP_MERCHANT,
    PRIVATE_OWNER
} 

@Object()
export class Participant {

    @Property()
    public name: string;
    
    @Property()
    public type: ParticipantTypes;

    constructor(name: string, type: ParticipantTypes) {
        this.name = name;
        this.type = type;
    }
}
