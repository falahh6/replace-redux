import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionItentifier, payload) => {
    const newState = actions[actionItentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      if (typeof listener === "function") {
        listener(globalState);
      } else {
        console.log("not a function");
      }
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
  actions = { ...actions, ...userAction };
};

export default useStore;
