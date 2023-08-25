import { Counter } from './features/counter/Counter';

// Маршрутизация с использованием on gh-pages плохо работает с BrowserRouter or ReactRouter, вместо этого используйте HashRouter из react-router-dom.

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
