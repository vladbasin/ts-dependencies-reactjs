import { isNil } from 'lodash';
import { useContext } from "react";
import { ServiceContext } from '../Context/ServiceContext';

export const useService = <T extends unknown>(id: string) => {
    const context = useContext(ServiceContext);

    if (isNil(context)) {
        throw new Error(
            'useService must be wrapped with ServiceProvider'
        );
    }

    return context.get<T>(id);
}