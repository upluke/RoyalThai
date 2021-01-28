import IndexPage from "../src/components/IndexPage"
import MenuPage from './components/MenuPage/MenuPage'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" >
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/menu" component={MenuPage} />
      </div>
    </Router>
  );
}

export default App;
