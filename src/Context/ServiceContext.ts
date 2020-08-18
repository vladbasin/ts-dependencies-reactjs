import { ServiceProviderContract } from '@vladbasin/ts-dependencies';
import { Maybe } from "@vladbasin/ts-types";
import { createContext } from "react";

export const ServiceContext = createContext<Maybe<ServiceProviderContract>>(undefined);