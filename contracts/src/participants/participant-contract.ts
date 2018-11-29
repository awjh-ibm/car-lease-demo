/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context, Contract, Object, Property, Transaction } from 'fabric-contract-api';
import { Participant, ParticipantTypes } from './participant-def';

export class ParticipantsManagement extends Contract {
    constructor() {
        super('participant-management');
    }

    @Transaction(false)
    registerParticipant(name: string, type: ParticipantTypes) {
        let participant = new Participant(name, type);

        // ADD IDENTITY AS PARTICIPANT
    }

    deleteParticipant(name: string) {
        // REMOVE IDENTITY AS PARTICIPANT
    }
}
