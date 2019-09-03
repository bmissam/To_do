import {createStore,combineReducers} from 'redux'
import InputReducer from'./Reducers/InputReducer'
import OutputReducer from'./Reducers/OutputReducer' 

const Store=createStore(combineReducers({
    input:InputReducer , 
    todo:OutputReducer
}))

export default Store 