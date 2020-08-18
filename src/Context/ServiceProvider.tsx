import { ServicesContract } from "@vladbasin/ts-dependencies";
import React from "react";
import { ServiceContext } from "./ServiceContext";

type ServiceProviderType = {
    services: ServicesContract,
    children: JSX.Element | JSX.Element[],
}

export const ServiceProvider = (props: ServiceProviderType) => {
    return (
        <ServiceContext.Provider 
            value={props.services}
        >
            {props.children}
        </ServiceContext.Provider>
    ); 
}