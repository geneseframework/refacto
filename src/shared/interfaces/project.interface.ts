import { Stats } from './stats.interface';

export interface Project {
    name: string;
    path: string;
    stats?: Stats;
}
