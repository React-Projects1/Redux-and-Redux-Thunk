import {createStore} from 'redux'
import Reducer1 from './Reducrs/Reducer1'
import { thunk } from 'redux-thunk'
import { applyMiddleware } from 'redux'
import Reducers from './Reducrs/index'

const Store = createStore(Reducers,applyMiddleware(thunk))

export default Store