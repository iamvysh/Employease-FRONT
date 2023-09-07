import React from 'react'
import Navigation from '../../componets/Navigarion'
import Button from 'react-bootstrap/Button';

const CommonRegister = () => {
  return (
    <>
      


        <Navigation/>
        <div className="container mt-3">
        <Button variant="primary" size="lg">
        Register-Employee
        </Button>{' '}
        <Button variant="primary" size="lg">
        Register-User
        </Button>{' '}
        <Button variant="primary" size="lg">
        Register-Agency
        </Button>{' '}


        </div>




      
    </>
  )
}

export default CommonRegister
