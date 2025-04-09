import React, { useState, useContext } from 'react';
// Create a Contextconst ThemeContext = React.createContext();
// Create a Provider componentconst ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const ToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>      {children}    </ThemeContext.Provider>  );
;// A component that consumes the contextconst ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}><h2>Current Theme: {theme}</h2><button onClick={toggleTheme}>Toggle Theme</button></div>  );
;const App = () => {
  return (
    <ThemeProvider><ThemedComponent /></ThemeProvider>
  );
};

export default App;