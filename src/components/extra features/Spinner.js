import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'
const SpinnerFeature = () => {
  return (
    <div className="container text-center spinnerdiv">
      <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
    </div>
  )
}

export default SpinnerFeature