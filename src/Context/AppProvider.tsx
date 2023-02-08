import React, { useReducer ,createContext } from 'react';
import { AppReducer, initialState } from './AppReducer';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  const setUserData = (userData) => {
    dispatch({type: 'setUserData', payload: userData});
  };

  return (
    <AppContext.Provider value={{appState, setUserData}}>{children}</AppContext.Provider>
  );
};
