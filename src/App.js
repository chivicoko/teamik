import './App.css';
import Nav from './components/Nav';
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
    teamName: "TeamA",
    pesowpId: "PESOWP/ST/01"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA",
    pesowpId: "PESOWP/ST/02"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA",
    pesowpId: "PESOWP/ST/03"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB",
    pesowpId: "PESOWP/ST/04"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "Flutter Developer",
    gender: "male",
    teamName: "TeamB",
    pesowpId: "PESOWP/ST/05"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB",
    pesowpId: "PESOWP/ST/06"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "PHP Developer",
    gender: "male",
    teamName: "TeamC",
    pesowpId: "PESOWP/ST/07"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "Product Designer",
    gender: "female",
    teamName: "TeamC",
    pesowpId: "PESOWP/ST/08"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC",
    pesowpId: "PESOWP/ST/09"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD",
    pesowpId: "PESOWP/ST/010"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD",
    pesowpId: "PESOWP/ST/011"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD",
    pesowpId: "PESOWP/ST/012"
  },
  {
    id: 13,
    fullName: "Victor Emmanuel",
    designation: "ReactJs Designer",
    gender: "male",
    teamName: "TeamA",
    pesowpId: "PESOWP/ST/013"
  },
  {
    id: 14,
    fullName: "Kent Onyema",
    designation: "Flutter Developer (Intern)",
    gender: "female",
    teamName: "TeamD",
    pesowpId: "PESOWP/ST/014"
  },
  {
    id: 15,
    fullName: "Ifeoma Victoria",
    designation: "Python Developer",
    gender: "female",
    teamName: "TeamB",
    pesowpId: "PESOWP/ST/015"
  },
  {
    id: 16,
    fullName: "Ani Marcus",
    designation: "Data Analyst",
    gender: "male",
    teamName: "TeamD",
    pesowpId: "PESOWP/ST/016"
  },
  {
    id: 17,
    fullName: "Chibuzo Agbo",
    designation: "Data Engineer",
    gender: "male",
    teamName: "TeamC",
    pesowpId: "PESOWP/ST/017"
  }
];

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
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Nav />
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
