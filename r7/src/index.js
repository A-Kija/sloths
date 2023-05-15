import 'bootstrap/dist/css/bootstrap.css';
import './buttons.scss';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './Data';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
    <App />
    </DataProvider>
);