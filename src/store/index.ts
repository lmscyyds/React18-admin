import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import numStatesReducer from "./NumStates/reducer"
import arrStatesReducer from "./ArrStates/reducer"

const reducers = combineReducers({
    numStatesReducer,
    arrStatesReducer
})

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 让浏览器redux-dev-tools能正常使用
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__())

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 吧仓库数据，浏览器redux-dev-tools,还有reduxThunk插件关联store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

export default store