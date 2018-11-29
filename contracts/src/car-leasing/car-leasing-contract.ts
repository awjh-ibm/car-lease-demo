/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context, Contract, Transaction, Returns } from 'fabric-contract-api';
import { Participant, ParticipantTypes } from '../participants/participant-def';
import { Car } from './car-leasing-def';
import { Md5 } from 'ts-md5/dist/md5';

export class CarLeasing extends Contract {
    @Transaction()
    @Returns('string')
    async createCar(ctx: Context, model: string, colour: string) {
        const manufacturer = new Participant('Ferrari', ParticipantTypes.MANUFACTURER); /// MAKE IT BE THE CALLER

        const car = new Car(manufacturer, model, colour);

        const existingCars = await this.getAllCars(ctx)

        let vin = Md5.hashAsciiStr(ctx.stub.createCompositeKey('manufacturer/cars', [manufacturer.name, model, colour, existingCars.length.toString()])).toString()

        car.VIN = vin;

        await ctx.stub.putState(vin.toString(), car.serialize())

        return vin
    }

    @Transaction(false)
    @Returns('string')
    getAllCars({stub}: Context) {
        const cars = stub.getQueryResult(JSON.stringify({
            selector: {
                VIN: {
                    exists: true
                }
            }
        }))

        return JSON.stringify(cars);
    }
}
