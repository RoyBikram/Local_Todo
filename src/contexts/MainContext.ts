// ---------External----------//
import { createContext } from 'react';
// ---------Internal----------//
import { Context } from '../Interfaces/Context';

export const MainContext = createContext<Context | null>(null);
