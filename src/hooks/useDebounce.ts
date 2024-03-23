import { useState } from 'react';

type CallbackFunction = (...args: any[]) => void;

const useDebounce = (callback: CallbackFunction, delay: number): CallbackFunction => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimeoutId(id);
  };
};

export default useDebounce;