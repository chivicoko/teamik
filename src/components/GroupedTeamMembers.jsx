import React, { useState } from 'react'

const GroupedTeamMembers = ({employees, teams, setTeams}) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    function groupTeamMembers() {
        var teamsList = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = {team: 'TeamA', members:teamAMembers, collapsed: teams === 'TeamA' ? false : true}
        teamsList.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = {team: 'TeamB', members:teamBMembers, collapsed: teams === 'TeamB' ? false : true}
        teamsList.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = {team: 'TeamC', members:teamCMembers, collapsed: teams === 'TeamC' ? false : true}
        teamsList.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = {team: 'TeamD', members:teamDMembers, collapsed: teams === 'TeamD' ? false : true}
        teamsList.push(teamD);

        return teamsList;
    }

    function handleTeamClick (e) {
        var newGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id
        ? {...groupedData, collapsed: !groupedData.collapsed}
        : groupedData);

        setGroupedEmployees(newGroupData);
        setTeams(e.currentTarget.id);
    }

  return (
    <main className='container'>
        {
            groupedEmployees.map((item) => {
                return (
                    <div key={item.team} className='card mt-2 text-center' style={{cursor: 'pointer'}}>
                        <h4 id={item.team} className='card-header bg-white text-secondary' onClick={handleTeamClick}>
                            Team Name: {item.team}
                        </h4>
                        <div id={'collapse_' + item.team} className={item.collapsed === true ? 'collapse' : ''}>
                            <hr/>
                            {
                                item.members.map(member => {
                                    return (
                                        <div className='mt-2'>
                                            <h5 className='card-title mt-2'>
                                                <span className='text-dark'>Full Name: {member.fullName}</span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </main>
  )
}

export default GroupedTeamMembers;