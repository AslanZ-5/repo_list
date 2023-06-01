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
    const lastCommit = data.node.defaultBranchRef?.target.history.edges[0].node.committedDate
    const languages = data.node.languages.edges
    return ( <article className={classes.container}>
         <div className={classes.owner}>
        <img className={classes.avatar} src={avatarUrl}/>
        <a href={`https://github.com/${login}`} target="_blank"  className={classes.nick}>{login}</a>
        </div>
        <div className={classes.details}><div className={classes.head}> <h1>Repository</h1>  
        <div className={classes.stars}>Stars: {totalCount}</div></div>
       <section className={classes.desc}>
       <div>
        <h4 className={classes.name}> Repository Name:{name}</h4>
            <p>Description: {description}</p> 
            <p>lastCommit :{lastCommit} </p>
        </div>
        
        <ul className={classes.lang}>Languages:{languages && languages.map((lang:{node:{name:string}}) => <li key={lang.node.name}>{lang.node.name}</li>)}</ul>
       </section>
        
   
        </div>
        
        
       
       
    </article>);
}


export default RepoDetails;