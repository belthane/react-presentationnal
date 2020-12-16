import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./UserComponent";

function App() {
  return (
    <Router>
      <div>
        <Route path="/user/:id" component={User} />
      </div>
    </Router>
  );
}

export default App;
