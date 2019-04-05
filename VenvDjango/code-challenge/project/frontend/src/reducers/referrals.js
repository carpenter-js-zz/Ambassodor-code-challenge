import { 
  GET_REFERRALS_REQUEST, 
  GET_REFERRALS_SUCCESS, 
  GET_REFERRALS_ERROR
 } from '../actions/types.js';

const initialState = {
  loading: false,
  error: null,
  referrals: [],
}

export default function referrals(state=initialState, action) {
  switch(action.type) {
    case GET_REFERRALS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_REFERRALS_SUCCESS:
      return {
        ...state,
        loading: false,
        referrals: action.payload
      }
    
    case GET_REFERRALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}