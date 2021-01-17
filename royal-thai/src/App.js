import IndexPage from "../src/components/IndexPage"
import Menu from './components/Menu/Menu'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/menu" component={Menu} />
      </div>
    </Router>
  );
}

export default App;
