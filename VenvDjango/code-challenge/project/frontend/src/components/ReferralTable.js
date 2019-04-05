import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReferrals } from '../actions/referrals';

export class ReferralTable extends Component {
  componentDidMount() {
    this.props.dispatch(getReferrals());
  }

  // generateRows(refData) {
  //   refData.map((ref, index) => {
  //     console.log('inside map, ref is: ', ref);
  //     const row =

  //       <tr key={index}>
  //         <td>{ref.title}</td>
  //         <td>{ref.click_count}</td>
  //         <td>
  //           <button>Edit</button>
  //         </td>
  //         <td>
  //           <button>Delete</button>
  //         </td>
  //       </tr> 
  //     console.log('row is: ', row);
  //     return row;
  //   });
  // }
  

  render() {
    if (this.props.loading) {
      return(
        <p>Loading...</p>
      );
    }else if (this.props.error) {
      return (
        <p>{this.props.error}</p>
      );
    }
    
    return (
      <table className='table is-striped'>
        <thead>
          <tr>
            <th>Referral</th>
            <th>Clicks</th> 
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.referrals.map((ref, index) => {
              console.log('inside map, ref is: ', ref);
              return (
                <tr key={index}>
                  <td>{ref.title}</td>
                  <td>{ref.click_count}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr> 
              );
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    referrals: state.referrals.referrals,
    loading: state.referrals.loading,
    error: state.referrals.error
  }
}

export default connect(mapStateToProps)(ReferralTable);