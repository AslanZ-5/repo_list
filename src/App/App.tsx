import SearchWidget from '../widgets/SearchWidget';
import RepoList from '../widgets/RepoList.tsx/RepoList';
import _debounce from 'lodash/debounce';
import classes from './App.module.scss'


function App() {
  
  return (

    <>
    <h1 className={classes.readit}>Learn Graphql</h1>
    <div className={classes.search_widget} >
      <SearchWidget  />
       <RepoList />
       </div>
    
   
    

    </>
  )
}

export default App

// function DisplayLocations() {
//   // const delayedQuery = useDebounce(query,1000)

//   // const { loading, error, data } = useQuery(GET_REPOSITORIES);
//   // const [
//   //   getRepositories,
//   //   { data: repositoryData }
   
//   // ] = useLazyQuery(GET_REPOSITORIES, {
//   //   variables: { userQuery: delayedQuery }
//   // });
  
//   // useEffect(() => {
//   //   getRepositories()
//   // }, [delayedQuery]);
  

 
//   // if (error) return <p>Error : {error.message}</p>;

//   return <div>
//   </div>
// }

//data.locations.map(({ id, name, description, photo }) => (

{/* <div key={id}>

<h3>{name}</h3>

<img width="400" height="250" alt="location-reference" src={`${photo}`} />

<br />

<b>About this location:</b>

<p>{description}</p>

<br />

</div>

)); */}
