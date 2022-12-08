import {conbineReducers} from 'redux'
import {user} from '/user'

//Conbine all the reducers into one function.
const Reducers = conbineReducers({
    userState: user
})
export default Reducers