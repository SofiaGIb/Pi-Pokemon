import "./App.css";
import { Route } from "react-router-dom";
import { Home, Detail, Form, Landing } from "./views";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/Home" component={Home} />
      <Route path="/Detail/:id" component={Detail} />
      <Route path="/Form" component={Form} />
    </div>
  );
}

export default App;
