import { Object, Property } from 'fabric-contract-api';

@Object()
export class Participant {

    @Property()
    private name: string;
    
    @Property()
    private type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    isType(desiredType: string):boolean {
        return this.type == desiredType;
    }

    getName(): string {
        return this.name;
    }
}
