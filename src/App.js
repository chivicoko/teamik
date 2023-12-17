import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import NotFound from './components/NotFound';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';



function App() {

  
  const employeeDetails = [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }];

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeeDetails);
  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem('teams')) || "TeamC");

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  function handleTeamSelectionChange (e) {
      setTeams(e.target.value);
  }

  function handleEmployeeCardClick (e) {
      const employeeCard = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
      ? (employee.teamName === teams) ? {...employee, teamName: ''} : {...employee, teamName: teams}
      : employee);

      setEmployees(employeeCard);
  }
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Nav />
      <Header
        teams={teams}
        teamMemberCount={employees.filter((employee) => employee.teamName === teams).length}
      />
      <Routes>
        <Route path='/' element={
          <Employees
            employees={employees}
            teams={teams}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        }>
        </Route>
        <Route path='/GroupedTeamMembers' element={
          <GroupedTeamMembers
            employees={employees}
            teams={teams}
            setTeams={setTeams}/>}
          >
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
