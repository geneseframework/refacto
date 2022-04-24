import { store } from '../../renderer/App';
import { API } from '../enums/api.enum';
import { RoutesEnum } from '../enums/route.enum';

export const getRoute = (): RoutesEnum => {
    return store.get(API.ROUTE);
};

export const saveRoute = (route: RoutesEnum): void => {
    store.set(API.ROUTE, route);
};
