import { combineReducers } from 'redux' 

import ListReducer from './list'
import ActiveReducer from './active'


const ArticlesReducer = combineReducers({
	list: ListReducer,
	active: ActiveReducer
})

export default ArticlesReducer