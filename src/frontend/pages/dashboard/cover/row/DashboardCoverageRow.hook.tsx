import { percentage } from '../../../../../shared/utils/numbers.utils';
import { DashboardCoverageRowProps } from './DashboardCoverageRow';

export const useDashboardCoverageRow = (props: DashboardCoverageRowProps) => {
    const { covered, toCover } = props;
    const percents: number = percentage(covered, toCover) || 0;
    const ratioText: string = `${covered} / ${toCover}`;
    const percentageText: string = `(${percents} %)`;

    return {
        ...props,
        percentageText,
        ratioText,
    };
};
