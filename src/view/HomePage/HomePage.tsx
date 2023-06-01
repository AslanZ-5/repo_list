import RepoList from "../../widgets/RepoList";
import SearchWidget from "../../widgets/SearchWidget";
import classes from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <>
      <div className={classes.search_widget}>
        <SearchWidget />
        <RepoList />
      </div>
    </>
  );
};

export default HomePage;
