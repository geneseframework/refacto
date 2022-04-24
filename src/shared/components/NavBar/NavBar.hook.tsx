import { store } from '../../../renderer/App';
import { appStyle } from '../../../renderer/App.style';
import { useState } from 'react';
import { NavBarTabStyles } from './NavBarTab.interface';
import { ROUTES_OBJECT } from '../../constants/routes.const';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../enums/route.enum';
import { getRoute } from '../../store/route.store';

function isCurrentRoute(route: RoutesEnum): boolean {
    return route === getRoute();
}

function tabsColors(): NavBarTabStyles {
    const navBarTabColors: NavBarTabStyles = {};
    for (const route in ROUTES_OBJECT) {
        // const isCurrentRoute: boolean = route === store.get('route');
        navBarTabColors[route] = {
            color: isCurrentRoute(ROUTES_OBJECT[route])
                ? appStyle.lightColor
                : appStyle.secondaryColor,
        };
    }
    return navBarTabColors;
}

export const useNavBar = () => {
    const [tabsColor, setTabsColor] = useState<NavBarTabStyles>(tabsColors());
    const [settingsIconColor, setSettingsIconColor] = useState<string>(
        tabsColors()
    );
    const navigate = useNavigate();

    const navigateTo = (route: string): void => {
        console.log('to route', route);
        store.set('route', route);
        setTabsColor(tabsColors());
        navigate(route);
    };

    return {
        navigateTo,
        tabsColor,
    };
};
