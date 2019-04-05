import { GET_REFERRALS } from '../actions/types.js';

const initialState = {
  referrals: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LEADS:
      return {
        ...state,
        referrals: action.payload
      }
      default:
        return state;
  }
}