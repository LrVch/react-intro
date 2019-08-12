import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect
} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';

export const IndicatorContext = createContext();

export const IndicatorProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const value = useMemo(() => ({ active, setActive }), [active, setActive]);
  return (
    <IndicatorContext.Provider value={value}>
      {children}
    </IndicatorContext.Provider>
  );
}

export const Progress = (props) => {
  const { active } = useContext(IndicatorContext);
  return active ? <LinearProgress {...props} /> : null;
}

export const ProgressFallback = () => {
  const { setActive } = useContext(IndicatorContext);
  useEffect(() => {
    setActive(true);
    return () => setActive(false);
  });
  return null;
}