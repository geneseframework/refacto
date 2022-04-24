import { RoutesEnum } from '../enums/route.enum';

type RoutesObject = {
    [key: string]: RoutesEnum;
};

export const ROUTES_OBJECT: RoutesObject = {
    complexity: RoutesEnum.complexity,
    coverage: RoutesEnum.coverage,
    dashboard: RoutesEnum.dashboard,
    duplication: RoutesEnum.duplication,
    settings: RoutesEnum.settings,
};
