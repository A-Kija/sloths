import './App.scss';
import './buttons.scss';
import Buttons from './Components/017/Buttons';
import List from './Components/017/List';
import { Code } from './Components/017/Store';
import View from './Components/017/View';

function App() {


    return (
        <Code>
            <div className="App">
                <header className="App-header">
                    <List />
                    <Buttons />
                    <View />
                </header>
            </div>
        </Code>
    );
}

export default App;