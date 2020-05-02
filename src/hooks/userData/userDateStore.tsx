import React, { createContext, useReducer } from "react";
import Reducer, { PERSIST_USERDATA_TAG } from "./userDataReducer";

const initialUserDataState: any = {
  name: undefined,
  accessToken: undefined,
  uid: undefined,
};

const getInitState = () => {
  return JSON.parse(
    window.localStorage.getItem(PERSIST_USERDATA_TAG) ||
      JSON.stringify(initialUserDataState)
  );
};

const UserDataStore = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, getInitState());
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialUserDataState);
export default UserDataStore;
