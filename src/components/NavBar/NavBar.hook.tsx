// import { store } from '../../renderer/App';
// import { appStyle } from '../../renderer/App.style';
//
import { store } from '../../renderer/App';

export const useNavBar = () => {
    const route = store.get('route');
    console.log('route', route);
//
    const linkStyle = (route: string): object => {
//         const color: string = route === store.get('route') ? appStyle.lightColor : appStyle.secondaryColor;
        return {
            color: 'blue'
//             color
        };
    }
    return {
        linkStyle,
    }
}
