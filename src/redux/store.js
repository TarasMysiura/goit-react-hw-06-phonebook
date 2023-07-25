import { combineReducers, createStore } from 'redux';
import { phonebookFormReducer } from './phonebookFormReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  phonebookFormReducer: phonebookFormReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);