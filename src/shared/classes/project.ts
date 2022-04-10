import { Stats } from './stats';

export class Project {
    name: string;
    path: string;
    stats: Stats;

    constructor(name: string,  path: string, stats = new Stats()) {
        this.name = name;
        this.path = path;
        this.stats = stats;
    }
}
