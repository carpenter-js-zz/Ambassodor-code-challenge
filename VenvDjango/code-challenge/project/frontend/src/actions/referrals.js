import { 
  GET_REFERRALS_REQUEST, 
  GET_REFERRALS_SUCCESS, 
  GET_REFERRALS_ERROR 
} from './types';

// GET REFERRALS
export const getReferralsRequest = () => ({
  type: GET_REFERRALS_REQUEST
});

export const getReferralsSuccess = (payload) => ({
  type: GET_REFERRALS_SUCCESS,
  payload
});

export const getReferralsError = error => ({
  type: GET_REFERRALS_ERROR,
  error
});

export const getReferrals = () => dispatch => {
  dispatch(getReferralsRequest());
    return fetch(`/api/referrals/`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(payload => dispatch(getReferralsSuccess(payload))
        ).catch(err => dispatch(getReferralsError(err))
        );
}