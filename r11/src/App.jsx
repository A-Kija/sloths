import Books from './Components/Books';
import { StoreProvider } from './Store';
import './App.scss';
import Menu from './Components/Menu';

function App() {

  return (
    <StoreProvider>
    <div className="app">
      <Books />
      <Menu />
    </div>
    </StoreProvider>
  );
}

export default App;
