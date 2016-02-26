import { combineReducers } from 'redux';

import QuestionsReducer from './articles';

const rootReducer = combineReducers({
	articles: QuestionsReducer
});

export default rootReducer;