import React from 'react'
import maleProfileImage from '../images/maleProfileImage.png'
import femaleProfileImage from '../images/femaleProfileImage.jpg'


const Employees = ({employees, teams, handleEmployeeCardClick, handleTeamSelectionChange}) => {

  return (
    <main className='container'>
        <div className='row justify-content-center my-3 sticky-top'>
            <div className='col-6'>
                <select className="form-select form-select-lg" value={teams} onChange={handleTeamSelectionChange}>
                    <option value="TeamA">TeamA</option>
                    <option value="TeamB">TeamB</option>
                    <option value="TeamC">TeamC</option>
                    <option value="TeamD">TeamD</option>
                </select>
            </div>
        </div>
        <div className='row justify-content-center my-3'>
                {employees.map((employee) => {
                    return (
                        <div 
                            id={employee.id}
                            className= {(employee.teamName === teams ? 'card col-3 p-2 text-center bg-info m-2 rounded showUnique' : 'card col-3 p-2 text-center bg-info m-2 rounded')}
                            style={{ cursor: 'pointer' }}
                            onClick={handleEmployeeCardClick}
                            key={employee.id}
                        >
                            <h1> {employee.gender === 'male' ? '👓' : '🤎'}</h1>
                            <img className='card-img-top rounded' src={employee.gender === 'male' ? maleProfileImage : femaleProfileImage} alt={employee.gender === 'male' ? "Male Profile Picture" : "Female Profile Picture"} />
                            <div className='card-body'>
                                <h5 className='card-title'><strong>Full Name:</strong> {employee.fullName}</h5>
                                <p className='card-text'><strong>Designation:</strong> {employee.designation}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
    </main>
  )
}

export default Employees;