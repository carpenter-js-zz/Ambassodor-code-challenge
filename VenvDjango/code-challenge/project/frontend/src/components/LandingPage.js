import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1 className="title is-1">Link Title</h1>

      <Link to={'/'}>
        <button className="button is-link">Back to home</button>
      </Link>
    </div>
  )
}
