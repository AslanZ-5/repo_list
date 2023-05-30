import classes from './RepoItem.module.scss'
import { NodeT } from '../../types/mainTypes';
import { formatedDate } from '../../utils/formatDate';
const RepoItem = (props:{repo:NodeT}) => {
    const commit = props.repo.defaultBranchRef.target.history.edges[0]
    console.log(commit)
    return (<li className={classes.repo_item}><h4>{props.repo.name}</h4> <div>lastcommit: {formatedDate(commit.node.committedDate)}</div>  <div>stars:{props.repo.stargazers.totalCount} </div>
    <div> url: <a href={props.repo.url} target='_blank'>visit in github</a></div></li>  );
  }

export default RepoItem