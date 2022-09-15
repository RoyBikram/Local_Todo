import { createContext } from 'react';
import { Context } from '../interfaces/Context';

export const MainContext = createContext<Context | null>(null);
