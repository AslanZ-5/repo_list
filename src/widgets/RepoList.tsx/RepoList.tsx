import { useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import {  useLazyQuery, useQuery } from '@apollo/client';
import { useAppSelector } from '../../hooks';
import {GET_REPOSITORIES,get_all_queries, GET_CURRENT_USER_REPOS} from '../../const/gql'
import { NodeT } from '../../types/mainTypes';
import RepoItem from '../RepoItem';
import classes from './RepoList.module.scss'

const RepoList = () => {
     const query = useAppSelector((state) => state.search.query)
     const delayedQuery = useDebounce(query,1000)
    //  const {data:current}= useQuery(GET_CURRENT_USER_REPOS)

  // const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const [
    getRepositories,
     {data, loading} 
   
  ] = useLazyQuery(GET_REPOSITORIES, {
    variables: { userQuery: delayedQuery }
  });
  
  const dataArr = data?.search?.edges
  
  useEffect(() => {
    getRepositories()
  }, [delayedQuery]);
  

   if (loading) return <p>Loading ...</p>;

  // if (error) return <p>Error : {error.message}</p>;
  // console.log('!!!!!!!!!!',current)
  return <div>
    <h1>repositories:</h1>
    <ul className={classes.repo_list}>
      {dataArr?.map((repo:{node:NodeT}) => {
        return <RepoItem key={repo.node.id} repo={repo.node}/>
      })}
    </ul>
  </div>
}

 
export default RepoList;


