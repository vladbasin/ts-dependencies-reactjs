import { isNil } from 'lodash';
import { useContext } from "react";
import { ServiceContext } from '../Context/ServiceContext';

export const useServices = (ids: string[]): any[] => {
    const context = useContext(ServiceContext);

    if (isNil(context)) {
        throw new Error(
            'useService must be wrapped with ServiceProvider'
        );
    }

    return ids.map(id => context.provide(id));
}