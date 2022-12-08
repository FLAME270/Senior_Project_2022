
import { combineReducers } from 'redux'
import { user } from './user'
import { users } from './users'

//reduce the users states
const Reducers = combineReducers({
    userState: user,
    usersState: users
})

export default Reducers