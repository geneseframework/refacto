import { StatsDuplication } from './stats-duplication';

export class Stats {
    duplication?: StatsDuplication;

    constructor(duplication = new StatsDuplication()) {
        this.duplication = duplication;
    }
}
