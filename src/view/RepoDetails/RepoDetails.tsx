import { useParams } from "react-router-dom";
import {  useQuery } from '@apollo/client';
import { GET_REPO_BY_ID } from "../../const/gql";
import classes from './RepoDetails.module.scss'
const RepoDetails = () => {
    const {id} = useParams<string>()
    const {loading, data} = useQuery(GET_REPO_BY_ID, {variables: {id:id}})
    if (loading){
        return <h1>Loading...</h1>
    }
    const {node:{name,description,stargazers:{totalCount},owner:{avatarUrl,login}}} = data

    console.log(name,description,totalCount,avatarUrl,login)
    return ( <div>
        <h1>Repository</h1> 
        <h4> Repository Name:{name}</h4>
        <div>
            {description}
        </div>
        <div>Stars: {totalCount}</div>
        <img className={classes.avatar} src={avatarUrl}/>
        <a href="ds/">{login}</a>
    </div>);
}


export default RepoDetails;