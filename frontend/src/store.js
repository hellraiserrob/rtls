import { createStore } from 'redux';
import reducer from './Reducers/'

function configureStore() {
  return createStore(
    reducer
  )
}

const store = configureStore()
export default store