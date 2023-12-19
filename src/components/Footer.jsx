import React from 'react'

var today = new Date();

const Footer = () => {
  return (
    <footer className='container-fluid'>
        <div className='row justify-content-center mt-5 py-2 pt-3'>
            <div className='col-6 text-center'>
                <h5 className='text-light'>Teamik App - &copy; Teamik Team {today.getFullYear()}</h5>    
            </div>
        </div>
    </footer>
  )
}

export default Footer;