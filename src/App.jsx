import "./App.css";
import Home from "./components/student/Home";
import StudentsView from "./components/student/StudentsView";
import NavBar from "./components/student/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/student/AddStudent";
import UpdateStudent from "./components/student/UpdateStudent";
import StudentProfile from "./components/student/StudentProfile";
import ErrorPage from "./components/student/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="view-students" element={<StudentsView />} />
            <Route exact path="add-student" element={<AddStudent />} />
            <Route exact path="update/:id" element={<UpdateStudent />} />
            <Route
              exact
              path="view-students-profile/:id"
              element={<StudentProfile />}
            />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
