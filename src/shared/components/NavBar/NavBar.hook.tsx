import { store } from '../../../renderer/App';
import { appStyle } from '../../../renderer/App.style';
import { useEffect, useState } from 'react';
import { NavBarTabStyles } from './NavBarTab.interface';
import { ROUTES_OBJECT } from '../../constants/routes.const';
import { useNavigate } from 'react-router-dom';

function tabsColors(): NavBarTabStyles {
    const navBarTabColors: NavBarTabStyles = {};
    for (const route in ROUTES_OBJECT) {
        const isCurrentRoute: boolean = route === store.get('route');
        navBarTabColors[route] = {color: isCurrentRoute ? appStyle.lightColor : appStyle.secondaryColor};
    }
    return navBarTabColors;
}

export const useNavBar = () => {
    // const route = store.get('route');
    const [tabsColor, setTabsColor] = useState<NavBarTabStyles>(tabsColors());
    const navigate = useNavigate();
    console.log('store.get(\'route\')', store.get('route'))

    // useEffect(() => {
    //     if (Object.keys(tabsColor).length === 0) {
    //         //     initTabsColors();
    //         // }
    //         const navBarTabColors: NavBarTabStyles = {};
    //         for (const route in ROUTES_OBJECT) {
    //             const isCurrentRoute: boolean = route === store.get('route');
    //             navBarTabColors[route] = {color: isCurrentRoute ? appStyle.lightColor : appStyle.secondaryColor};
    //         }
    //         setTabsColor({...navBarTabColors});
    //     }
    // }, [tabsColor, setTabsColor])

    const initTabsColors = () => {
        const navBarTabColors: NavBarTabStyles = {};
        for (const route in ROUTES_OBJECT) {
            const isCurrentRoute: boolean = route === store.get('route');
            navBarTabColors[route] = { color: isCurrentRoute ? appStyle.lightColor : appStyle.secondaryColor };
        }
        setTabsColor({...navBarTabColors});
    }

    const navigateTo = (route: string, e): void => {
        store.set('route', route);
        console.log('NAVVVV to route', route)
        console.log('NAVVVV to e', e)
        setTabsColor(tabsColors());
        navigate(route);

        // initTabsColors();
        // console.log('route', route);
        // console.log('store.get(\'route\')', store.get('route'))
        // const color: string = route === store.get('route') ? appStyle.lightColor : appStyle.secondaryColor;
        // return {
        //     color
        // };
    }

    console.log('tabsColor', tabsColor)
    // console.log('ROUTES_OBJECT.DASHBOARD', ROUTES_OBJECT.DASHBOARD)
    // console.log('tabsColor[ROUTES_OBJECT.DASHBOARD]', tabsColor[ROUTES_OBJECT.DASHBOARD])

    return {
        navigateTo,
        tabsColor,
    }
}
