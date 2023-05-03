import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useStore = (shouldListen = true) => {
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
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userAction, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userAction };
};

export default useStore;
