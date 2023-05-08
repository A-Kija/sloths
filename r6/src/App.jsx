import 'bootstrap/dist/css/bootstrap.css';
import './buttons.scss';
import { Data } from './Store';
import './app.scss';
import Nav from './Components/Nav';
import Main from './Components/Main';

export default function App() {

  return (
    <Data>
      <Nav />
      <Main />
    </Data>
  );
}