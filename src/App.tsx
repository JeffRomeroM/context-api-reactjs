

import { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { MyContext } from "./Context/SaludoContext";
import Saludo from './components/Saludo';



function App() {
  const [theme, setTheme] = useState('light');
  const [saludo, setSaludo] = useState("");


  return (
    <div>
      <MyContext.Provider value={{ saludo, setSaludo }}>
        <Saludo />
      </MyContext.Provider>
     
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
   
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
    </div>
    
  );
}

export default App;


