import { store } from '../../../renderer/App';
import { appStyle } from '../../../renderer/App.style';
import { useState } from 'react';

export const useNavBar = () => {
    const route = store.get('route');
    const [tabStyle, SetTabStyle] = useState<object>();
//
    const linkStyle = (route: string): object => {
        console.log('route', route);
        console.log('store.get(\'route\')', store.get('route'))
        const color: string = route === store.get('route') ? appStyle.lightColor : appStyle.secondaryColor;
        return {
            color
        };
    }
    return {
        linkStyle,
    }
}
