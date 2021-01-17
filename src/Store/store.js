import React, { createContext, useReducer } from "react";

const initialState = { selectedCardIndex: 0 };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "updateCardSelected":
        const newState = {
            selectedCardIndex: action.selectedCardIndex
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
