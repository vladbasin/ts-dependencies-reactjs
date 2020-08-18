import { ServiceProviderContract } from "@vladbasin/ts-dependencies";
import React from "react";
import { ServiceContext } from "./ServiceContext";

type ServiceProviderType = {
    provider: ServiceProviderContract,
    children: JSX.Element | JSX.Element[],
}

export const ServiceProvider = (props: ServiceProviderType) => {
    return (
        <ServiceContext.Provider 
            value={props.provider}
        >
            {props.children}
        </ServiceContext.Provider>
    ); 
}