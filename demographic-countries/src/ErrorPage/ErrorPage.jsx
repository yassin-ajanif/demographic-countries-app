import React from 'react'
import './ErrorPage.css'

const ErrorPage = ({ErrorMessage}) => {

  return (

    <div className='ErrorPage'>{ErrorMessage}</div>

  )

}

export default ErrorPage