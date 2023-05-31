import classes from './RepoItem.module.scss'
import { Link } from 'react-router-dom';
import { NodeT } from '../../types/mainTypes';
import { formatedDate } from '../../utils/formatDate';
const RepoItem = (props:{repo:NodeT}) => {
    const commit = props.repo?.defaultBranchRef?.target.history.edges[0]
    return (<li className={classes.repo_item}><h4> <Link to={`details/${props.repo.id}`}>{props.repo.name}</Link></h4> <div>lastcommit:   {props.repo?.defaultBranchRef ? formatedDate(commit.node.committedDate) : "no commits"}</div>  <div>stars:{props.repo.stargazers.totalCount} </div>
    <div> url: <a href={props.repo.url} target='_blank'>visit in github</a></div></li>  );
  }

export default RepoItem