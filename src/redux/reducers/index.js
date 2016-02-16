import { combineReducers } from 'redux';

import QuestionReducer from './QuestionReducer';

const rootReducer = combineReducers({
	questions: QuestionReducer
});

export default rootReducer;