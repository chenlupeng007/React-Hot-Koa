import React from 'react';

export interface IStore {
  login: boolean;
  setLogin: (login: boolean) => void;
}

export const StoreContext = React.createContext({} as IStore);
