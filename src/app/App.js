//absolute path

import { fetchProfileAction } from "../features/authencation/action";
import styles from "./style.module.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";



import Headerr from "../common/componets/Header";




const Signin = lazy(() => import("../features/authencation/pages/Signin"));
const Rooms = lazy(() => import("../features/Room/pages/Rooms"));
const AddRoom = lazy(() => import("../features/Room/pages/AddRoom"));
const EditRoom = lazy(() => import("../features/Room/pages/EditRoom"));
const Users = lazy(() => import("../features/User/pages/Users"));
const EditUser = lazy(() => import("../features/User/pages/EditUser"));
const Locations = lazy(() => import("../features/Location/pages/Locations"));
const EditLocation = lazy(() => import("../features/Location/pages/EditLocations"));
const AddUser = lazy(() => import("../features/User/pages/AddUser"));
const AddLocation = lazy(() => import("../features/Location/pages/AddLocation"));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Switch className={styles.content}>
          <Route path="/" redirectPath="/" exact>
            <Headerr>
              <Signin />
            </Headerr>
          </Route>
         
          <Route path="/Rooms">
            <Headerr>
             <Rooms/>
            </Headerr>
          </Route>
          <Route path="/AddRoom">
            <Headerr>
              <AddRoom />
            </Headerr>
          </Route>
          <Route path="/AddUser">
            <Headerr>
              <AddUser />
            </Headerr>
          </Route>
          <Route path="/Users">
            <Headerr>
              <Users />
            </Headerr>
          </Route>
          <Route path="/Locations">
            <Headerr>
              <Locations />
            </Headerr>
          </Route>
          <Route path="/AddLocation">
            <Headerr>
              <AddLocation />
            </Headerr>
          </Route>
          <Route path="/EditRoom/:id">
            <Headerr>
              <EditRoom />
            </Headerr>
          </Route>
          <Route path="/EditLocation/:id">
            <Headerr>
              <EditLocation />
            </Headerr>
          </Route>
          <Route path="/EditUser/:id">
            <Headerr>
              < EditUser/>
            </Headerr>
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;


