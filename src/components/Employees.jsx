import React from 'react';
import maleProfileImage from '../images/maleProfileImage.png';
import femaleProfileImage from '../images/femaleProfileImage.jpg';
import Header from './Header';


const Employees = ({employees, teams, handleEmployeeCardClick, handleTeamSelectionChange}) => {

  return (
    <main className='container'>
        <div className='row justify-content-center my-3 sticky-top'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <select className="form-select form-select-lg" value={teams} onChange={handleTeamSelectionChange}>
                    <option className='option' value="TeamA">Team One <span className='span'>(School(s) Management)</span></option>
                    <option className='option' value="TeamB">Team Two <span className='span'>(Flavor Junction Restaurant Management)</span></option>
                    <option className='option' value="TeamC">Team Three <span className='span'>(Blopz Rider App Management)</span></option>
                    <option className='option' value="TeamD">Team Four <span className='span'>(School Management)</span></option>  
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
                            className= {(employee.teamName === teams ? 'card cardItem col-3 text-center py-2 m-2 showUnique' : 'card cardItem col-3 text-center py-2 m-2')}
                            style={{ cursor: 'pointer' }}
                            onClick={handleEmployeeCardClick}
                            key={employee.id}
                        >
                            <img id='card__img' className='card-img-top' src={employee.gender === 'male' ? maleProfileImage : femaleProfileImage} alt={employee.gender === 'male' ? "Male Profile Picture" : "Female Profile Picture"} />
                            <div className='card-body'>
                                <h4>🤎 {employee.fullName} 🤎</h4>
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