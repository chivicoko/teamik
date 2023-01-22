import React from 'react'

var today = new Date();

const Footer = () => {
  return (
    <footer className='container'>
        <div className='row justify-content-center mt-4 mb-3'>
            <div className='col-6 text-center'>
                <h5>Team Member Allocation App - {today.getFullYear()}</h5>    
            </div>
        </div>
    </footer>
  )
}

export default Footer;