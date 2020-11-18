import React, { createContext, useReducer, ReactNode } from "react";
import { reducer } from "../utils/reducer";
import { PER_PAGE, TYPES } from "../utils/constants";
import { allData } from "../utils/allData";

export const Context = createContext(null) as any;

export default function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  const load = () => {
    dispatch({ type: TYPES.start });

    setTimeout(() => {
      const newData = allData.slice(after, after + PER_PAGE);
      dispatch({ type: TYPES.loaded, newData });
    }, 300);
  };

  return (
    <Context.Provider value={{ loading, data, more, load }}>
      {children}
    </Context.Provider>
  );
}
