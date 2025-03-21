import React, { useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme: theme,
      setTheme: setTheme,
    };
  }, [theme]);
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
