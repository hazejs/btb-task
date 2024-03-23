import React, { useReducer, createContext, ReactNode } from 'react';

type ActionFunction = (dispatch: React.Dispatch<any>) => any;
type Actions = { [key: string]: ActionFunction };

interface ProviderProps {
  children: ReactNode;
}

const createDataContext = (reducer: React.Reducer<any, any>, actions: Actions, initialState: any) => {
  const Context = createContext<any>(undefined);

  const Provider: React.FC<ProviderProps> = ({ children }: ProviderProps): any => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: any } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;