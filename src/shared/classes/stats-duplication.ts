import { StatsDuplicationItem } from './stats-duplication-item';

export class StatsDuplication {
    total: StatsDuplicationItem;
    types: StatsDuplicationItem[];

    constructor(total = new StatsDuplicationItem('Duplicated lines'), types: StatsDuplicationItem[] = []) {
        this.total = total;
        this.types = types;
    }
}
