import React, { Component } from 'react';


export default class ReferralForm extends Component {
  render() {
    return (
      <form 
        className="addReferralForm"
        // onSubmit={this.props.handleSubmit()}
      >
        <div className="field">
          <label className="label" htmlFor="referral">Add a link:</label>
          <div className="control">
            <input 
              className="input"
              type="text"
              name="referral"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
              className="button is-link"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}
