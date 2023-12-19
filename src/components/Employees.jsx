import React from 'react';
import maleProfileImage from '../images/maleProfileImage.png';
import femaleProfileImage from '../images/femaleProfileImage.jpg';
import Header from './Header';


const Employees = ({employees, teams, handleEmployeeCardClick, handleTeamSelectionChange}) => {

  return (
    <main className='container'>
        <div className='row justify-content-center my-3 sticky-top'>
            <div className='col-6'>
                <select className="form-select form-select-lg" value={teams} onChange={handleTeamSelectionChange}>
                    <option value="TeamA">Team One (School(s) Management)</option>
                    <option value="TeamB">Team Two (Flavor Junction Restaurant Management)</option>
                    <option value="TeamC">Team Three (Blopz Rider App Management)</option>
                    <option value="TeamD">Team Four (School Management)</option>  
                </select>

                <Header
                    teams={teams}
                    teamMemberCount={employees.filter((employee) => employee.teamName === teams).length}
                />
            </div>
        </div>

        <div className='row d-flex justify-content-center align-items-center my-3'>
                {employees.map((employee) => {
                    return (
                        <div 
                            id={employee.id}
                            className= {(employee.teamName === teams ? 'card col-3 text-center py-2 m-2 showUnique' : 'card col-3 text-center py-2 m-2')}
                            style={{ cursor: 'pointer' }}
                            onClick={handleEmployeeCardClick}
                            key={employee.id}
                        >
                            <img id='card__img' className='card-img-top' src={employee.gender === 'male' ? maleProfileImage : femaleProfileImage} alt={employee.gender === 'male' ? "Male Profile Picture" : "Female Profile Picture"} />
                            <div className='card-body'>
                                <h5> {employee.fullName} {employee.gender === 'male' ? '👓' : '🤎'}</h5>
                                <h6 className='card-title'><strong>{employee.pesowpId}</strong></h6>
                                <p className='card-text'><strong>{employee.designation}</strong></p>
                            </div>
                        </div>
                    )
                })}
            </div>
    </main>
  )
}

export default Employees;