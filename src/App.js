import Home from "./Components/Home/Home";
import Board from './Components/Board/Board'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameProvider from './Context/GameProvider/GameProvider'
import Loading from "./Components/Loading/Loading";


function App() {
  return (
    <Router>
      <GameProvider>
        <Loading/>
      <Switch>
        <Route exact path="/" children={<Home/>}/>
        <Route exact path="/Game" children={<Board/>}/>
      </Switch>
      </GameProvider>
    </Router>
  );
}

export default App;
