import { useContext } from 'react';
import ThemeContext from './Context/ThemeContext';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <div>
      <button onClick={handleThemeChange}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
