import React, { createContext, useState } from 'react';
import { theme, ThemeMode } from '../theme';
import { ThemeProvider } from 'styled-components';

interface GlobalContextType {
  theme: ThemeMode;
  toggleTheme: (newTheme: ThemeMode) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return savedTheme || 'dark';
  });

  const toggleTheme = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <GlobalContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme === 'dark' ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};