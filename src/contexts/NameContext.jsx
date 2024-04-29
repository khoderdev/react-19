import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  name: "Tonai",
};

const nameReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nameReducer, initialState);

  const setName = (newName) => {
    dispatch({ type: "SET_NAME", payload: newName });
  };

  return (
    <NameContext.Provider value={{ name: state.name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};

export const NameConsumer = ({ children }) => (
  <NameContext.Consumer>
    {(contextValue) => children(contextValue)}
  </NameContext.Consumer>
);
