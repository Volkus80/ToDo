import s from './SearchBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchTask } from '../../slice/searchSlice';


export default function SearchBar() {
    const value = useSelector(state => state.search);
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
           <input 
                type="text" 
                className={s.input}
                value={value}
                onChange={e => dispatch(searchTask(e.target.value))}    
            /> 
        </div>
    )
}

