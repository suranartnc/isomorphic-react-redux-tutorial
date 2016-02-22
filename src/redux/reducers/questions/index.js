import { combineReducers } from 'redux' 

import ListReducer from './list'
import ActiveReducer from './active'


const QuestionsReducer = combineReducers({
	list: ListReducer,
	active: ActiveReducer
})

export default QuestionsReducer