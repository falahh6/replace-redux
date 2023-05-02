import { useEffect, useState } from "react";

const globalState = {};
const listeners = [];
const actions = {};

const useStore = () => {
  const setState = useState(globalState);

  useEffect(() => {
    listeners.push(globalState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
