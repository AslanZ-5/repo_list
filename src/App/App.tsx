import HomePage from "../view/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoDetails from '../view/RepoDetails';
import { homePath, repoDetails } from "../routes";
import classes from './App.module.scss'


function App() {
  
  return (

    <>
    <h1 className={classes.readit}>GITHUB Graphql</h1>
    <Router>
      <Routes>
      <Route path={homePath} element={ <HomePage /> } />
        <Route path={repoDetails} element={<RepoDetails />} />
      </Routes>
    </Router>
   
    
   
    

    </>
  )
}

export default App

