import { combineReducers } from 'redux';

import ArticleListReducer from './ArticleListReducer';
import ArticleActiveReducer from './ArticleActiveReducer';

const rootReducer = combineReducers({
	articleList: ArticleListReducer,
	articleActive: ArticleActiveReducer
});

export default rootReducer;