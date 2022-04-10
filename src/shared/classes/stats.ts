import { DuplicationStats } from './duplication-stats';

export class Stats {
    duplication?: DuplicationStats;

    constructor(duplication?: DuplicationStats) {
        this.duplication = duplication;
    }
}
