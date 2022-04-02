import { DuplicatesRowProps } from './DuplicatesRow.props';
import { percentage } from '../../../../utils/numbers.utils';

export const useDuplicatesRow = (props: DuplicatesRowProps) => {
    const { duplicatedLines, lines } = props.statsFileFormat.total;
    const duplicatedLinesPercentage = percentage(duplicatedLines, lines);
    const percentageText: string = `${duplicatedLines} / ${lines} (${duplicatedLinesPercentage} %)`;

    return {
        ...props,
        percentageText,
    }
}
