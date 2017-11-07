import { combineReducers } from "redux"

import configurationReducer from "./configurationReducer"
import devicesReducer from "./devicesReducer"
import alertReducer from "./alertReducer"

let reducer = combineReducers({configurationReducer, devicesReducer, alertReducer})

export default reducer