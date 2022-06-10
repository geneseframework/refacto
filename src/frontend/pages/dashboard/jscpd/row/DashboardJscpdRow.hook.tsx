import { percentage } from '../../../../../shared/utils/numbers.utils';
import { DashboardJscpdRowProps } from './DashboardJscpdRow';

export const useDashboardJscpdRow = (props: DashboardJscpdRowProps) => {
    const { item } = props;
    const duplicatedLinesPercentage = percentage(
        item.duplicatedLines,
        item.lines
    );
    const percentageText: string = `${item.duplicatedLines} / ${item.lines} (${duplicatedLinesPercentage} %)`;
    const fileFormat: string = item.fileFormat;

    return {
        ...props,
        fileFormat,
        percentageText,
    };
};
