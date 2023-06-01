import HomePage from "../view/HomePage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RepoDetails from "../view/RepoDetails";
import { homePath, repoDetails } from "../routes";
import classes from "./App.module.scss";

function App() {
  return (
    <>
      <Router>
        <h1>
          <Link className={classes.logo} to="/">
            GITHUB Graphql
          </Link>
        </h1>
        <Routes>
          <Route path={homePath} element={<HomePage />} />
          <Route path={repoDetails} element={<RepoDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
