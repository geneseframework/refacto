export class DuplicationStatsItem {
    duplicates?: number;
    name: string;
    total?: number;

    constructor(name: string, duplicates = 0, total = 0) {
        this.duplicates = duplicates;
        this.name = name;
        this.total = total;
    }
}
