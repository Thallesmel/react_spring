import { createContext, useReducer } from 'react';

export const themeContext = createContext();

const initialState = { logado: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { logado: !state.logado };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};