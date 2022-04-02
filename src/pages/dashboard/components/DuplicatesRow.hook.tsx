import { DuplicatesRowProps } from './DuplicatesRow.props';
import { percentage } from '../../../utils/numbers.utils';

export const useDuplicatesRow = (props: DuplicatesRowProps) => {
    const { duplicatedLines, totalDuplicatedLines } = props;
    const duplicatedLinesPercentage = percentage(duplicatedLines, totalDuplicatedLines);
    const percentageText: string = `${duplicatedLines} / ${totalDuplicatedLines} (${duplicatedLinesPercentage} %)`;

    return {
        ...props,
        percentageText,
    }
}
