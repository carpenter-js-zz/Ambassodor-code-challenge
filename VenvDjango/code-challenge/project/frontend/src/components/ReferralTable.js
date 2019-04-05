import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReferrals } from '../actions/referrals';

export class ReferralTable extends Component {
  componentDidMount() {
    this.props.dispatch(getReferrals());
  }


  render() {
    
    return (
      <table className='table is-striped'>
        <thead>
          <tr>
            <th>Link</th>
            <th>clicks</th> 
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Link name</td>
            <td>0</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    referrals: state.referrals.referrals
  }
}

export default connect(mapStateToProps)(ReferralTable);