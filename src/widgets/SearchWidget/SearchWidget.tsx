import { useAppSelector, useAppDispatch } from '../../hooks';
import { makeQuery } from '../../features/search/searchSlice';
import classes from './SearchWidget.module.scss'

const SearchWidget = () => {
    const query = useAppSelector((state) => state.search.query)
    const dispatch = useAppDispatch()
    const handleQuery = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(makeQuery(e.target.value))
      }
    return ( <div>
        <input className={classes.searchBar}  value={query} onChange={handleQuery} />
    </div>);
}
 
export default SearchWidget;