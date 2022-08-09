import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

useLocalStorage.propTypes = {
  key: PropTypes.string.isRequired,
};
