import { combineReducers } from 'redux';

import { root } from './root.reducer';

// 하위 reducer들을 합쳐 하나의 reducer를 제작하는 부분입니다.
const rootReducer = combineReducers({ root });

export default rootReducer;
