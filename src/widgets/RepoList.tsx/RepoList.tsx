import { useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import {  useLazyQuery, useQuery } from '@apollo/client';
import { useAppSelector } from '../../hooks';
import {GET_REPOSITORIES,get_all_queries,GET_CURRENT_USER_REPOS} from '../../const/gql'
import { NodeT,PageInfoT } from '../../types/mainTypes';
import RepoItem from '../RepoItem';
import classes from './RepoList.module.scss'

type passingVarT = {
  userQuery?: string,
  after?: null | string
  before?: null | string
}

const RepoList = () => {
     const query = useAppSelector((state) => state.search.query)
     const delayedQuery = useDebounce(query,1000)
    //  const {data:allquery}= useQuery(GET_CURRENT_USER_REPOS)

  // const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const repositryQuery = delayedQuery? GET_REPOSITORIES : GET_CURRENT_USER_REPOS
  const passingVar:{variables:passingVarT} = {
    variables: { userQuery: delayedQuery, after: null, before: null }
  }
  const [
    getRepositories,
     {data, loading} 
   
  ] = useLazyQuery(repositryQuery,passingVar );
  
  const dataArr2: NodeT[] = delayedQuery ? data?.search?.edges.map((i: {__type:string, node:object}) => i.node) : data?.viewer?.repositories?.nodes
  const pageinfo: PageInfoT = delayedQuery ? data?.search?.pageInfo : data?.viewer?.repositories?.pageInfo
  useEffect(() => {
    getRepositories()
  }, [delayedQuery]);
  

   if (loading) return <p>Loading ...</p>;
  console.log('$$$$$$$$$$$*',data)
  // if (error) return <p>Error : {error.message}</p>;
  return <div>
    <h1>repositories:</h1>
    <ul className={classes.repo_list}>
      {dataArr2?.map((repo:NodeT) => {
        return <RepoItem key={repo.id} repo={repo}/>
      })}
    </ul>
    <button  onClick={() => {
      getRepositories({
        variables: { userQuery: delayedQuery,before: pageinfo.startCursor   }
      })
    }}>&#x2190; before</button>
    <button  onClick={() => {
      getRepositories({
        variables: { userQuery: delayedQuery, after: pageinfo.endCursor}
      })
    }}> &#x2192; after</button>
    
  </div>
}

 
export default RepoList;


