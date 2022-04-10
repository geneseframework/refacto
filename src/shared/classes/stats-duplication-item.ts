export class StatsDuplicationItem {
    duplicates?: number;
    name: string;
    total?: number;

    constructor(name: string, duplicates?: number, total?: number) {
        this.duplicates = duplicates;
        this.name = name;
        this.total = total;
    }
}
