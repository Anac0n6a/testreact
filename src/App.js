import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InputButton from './InputButton';
import ResultPage from './ResultPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InputButton />
        </Route>
        <Route path="/result/:inputValue">
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;