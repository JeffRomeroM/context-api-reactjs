import { useContext } from 'react';
import { MyContext } from '../Context/SaludoContext';

function MyComponent() {
  const { saludo, setSaludo } = useContext(MyContext);

  return (
    <div>
      <button onClick={() => setSaludo('Hola dev!')}>Saludo con context api</button>
      <h2>{saludo}</h2>
    </div>
  );
}

export default MyComponent;