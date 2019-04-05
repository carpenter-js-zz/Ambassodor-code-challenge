import { GET_REFERRALS } from '../actions/types.js';

const initialState = {
  referrals: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_REFERRALS:
      return {
        ...state,
        referrals: action.payload
      }
      default:
        return state;
  }
}