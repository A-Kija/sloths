import Books from './Components/Books';
import { StoreProvider } from './Store';
import './App.scss';

function App() {

  return (
    <StoreProvider>
    <div className="app">
      <Books />
    </div>
    </StoreProvider>
  );
}

export default App;
