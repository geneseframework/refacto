import { useModel } from './Model.hook';
import React from 'react';

export interface ModelProps {

}

export const Model: React.FC<ModelProps> = (props) => {
    const h = useModel(props);
    return (

    );
}
