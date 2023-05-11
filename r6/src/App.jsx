import 'bootstrap/dist/css/bootstrap.css';
import './buttons.scss';
import { Data } from './Store';
import './app.scss';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Messages from './Components/Messages';

export default function App() {

  return (
    <Data>
      <Nav />
      <Main />
      <Messages />
    </Data>
  );
}