import { DashboardJscpdRowProps } from './DashboardJscpdRow.props';
import { percentage } from '../../../../shared/utils/numbers.utils';

export const useDashboardJscpdRow = (props: DashboardJscpdRowProps) => {
    const { duplicatedLines, lines } = props.statsFileFormat.total;
    const duplicatedLinesPercentage = percentage(duplicatedLines, lines);
    const percentageText: string = `${duplicatedLines} / ${lines} (${duplicatedLinesPercentage} %)`;

    return {
        ...props,
        percentageText,
    }
}
