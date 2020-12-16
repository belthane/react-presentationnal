import { BrowserRouter as Router, Route } from "react-router-dom";
import UserComponentContainer from "./UserComponentContainer";

function App() {
  return (
    <Router>
      <div>
        <Route path="/user/:id" component={UserComponentContainer} />
      </div>
    </Router>
  );
}

export default App;
