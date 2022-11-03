import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Timetable from "./pages/timetable/Timetable";
import Allocate_employees_for_travel from "./pages/travel_employee_allocation/allocate_employees_for_travel";
import View_travel_employee_allocation from "./pages/travel_employee_allocation/view_travel_employee_allocation";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>  
          
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
            />
            
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
            />
            
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/Timetable">
              <Route index element={<Timetable />} />

            
            </Route>
            <Route path="/allocate_employees_for_travel">
              <Route index element={<Allocate_employees_for_travel/>} />

            
            </Route>
            <Route path="/View_travel_employee_allocation">
              <Route index element={<View_travel_employee_allocation/>} />

            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
