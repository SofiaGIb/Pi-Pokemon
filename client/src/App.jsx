import "./App.css";
import { Route } from "react-router-dom";
import { Home, Detail, Form, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Landing} />
      <Route path="/Home" component={Home} />
      <Route path="/Detail" component={Detail} />
      <Route path="/Form" component={Form} />
    </div>
  );
}

export default App;
