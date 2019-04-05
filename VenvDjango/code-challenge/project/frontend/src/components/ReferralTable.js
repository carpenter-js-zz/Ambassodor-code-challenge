import React, { Component } from 'react'

export default class ReferralTable extends Component {
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
