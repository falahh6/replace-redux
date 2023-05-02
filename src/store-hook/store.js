import { useEffect, useState } from "react";

const globalState = {};
const listeners = [];
const actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionItentifier) => {
    const newState = actions[actionItentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(globalState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userAction, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
};

export default useStore;
