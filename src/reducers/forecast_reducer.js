import { FETCH_WEATHER } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
    console.log(action);

      if (action.payload.data) {
        return [ action.payload.data, ...state ]
      }
    break;
    default:
      return state
  }
}
