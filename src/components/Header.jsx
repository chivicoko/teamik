import React from 'react'

const Header = ({teams, teamMemberCount}) => {
  return (
    <header className='container'>
        <div className='row justify-content-center mt-3 mb-4'>
            <div className='col-6 text-center'>
                <h5 className='team__member__count'>{teams} has {teamMemberCount} {teamMemberCount === 1 || teamMemberCount === 0 ? 'Member' : 'Members'}</h5>
            </div>
        </div>
    </header>
  )
}

export default Header;