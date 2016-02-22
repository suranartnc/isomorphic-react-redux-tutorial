import { combineReducers } from 'redux';

import QuestionsReducer from './questions';

const rootReducer = combineReducers({
	questions: QuestionsReducer
});

export default rootReducer;