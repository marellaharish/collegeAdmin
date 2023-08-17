import React from 'react';
import Login from './Views/Pages/Login';
import Signup from './Views/Pages/Signup';
import HomePage from './Views/Pages/Home';
import NavLinks from './Components/NavLinks/NavLinks';
import Footer from './Components/Footer/Footer';
import Dashboard from './Views/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollegeAdmissions from "./Views/Pages/CollegeAdmissions";
import ResultsManagement from './Views/Pages/ResultsManagement';
import ExaminationManagement from './Views/Pages/ExaminationManagement';
import HolidaysandTimeTable from './Views/Pages/HolidaysandTimeTable';
import AttendanceTracking from './Views/Pages/AttendanceTracking';
import StudentAndFacultyProfiles from './Views/Pages/StudentAndFacultyProfiles';
import LibraryManagement from './Views/Pages/LibraryManagement';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" index element={<Login />} />
        <Route path="/signup" index element={<Signup />} />
        <Route path="/main" index element={<HomePage />} />
        <Route path="/home" index element={<Dashboard />} />
        <Route path="/collegeAdmissions" index element={<CollegeAdmissions />} />
        <Route path="/resultsManagement" index element={<ResultsManagement />} />
        <Route path="/ExaminationManagement" index element={<ExaminationManagement />} />
        <Route path="/HolidaysandTimeTable" index element={<HolidaysandTimeTable />} />
        <Route path="/AttendanceTracking" index element={<AttendanceTracking />} />
        <Route path="/StudentAndFacultyProfiles" index element={<StudentAndFacultyProfiles />} />
        <Route path="/LibraryManagement" index element={<LibraryManagement />} />
        <Route path="/navLinks" index element={<NavLinks />} />
        <Route path="/footer" index element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
