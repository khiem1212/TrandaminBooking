//absolute path

import { fetchProfileAction } from "../features/authencation/action";
import styles from "./style.module.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";



import Headerr from "../common/componets/Header";


const Signup = lazy(() => import("../features/authencation/pages/Signup"));
const Signin = lazy(() => import("../features/authencation/pages/Signin"));
const Rooms = lazy(() => import("../features/Room/pages/Rooms"));
const AddRoom = lazy(() => import("../features/Room/pages/AddRoom"));
const EditRoom = lazy(() => import("../features/Room/pages/EditRoom"));

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
          <Route path="/signUp">
            <Headerr>
              <Signup />
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
          <Route path="/EditRoom">
            <Headerr>
              <EditRoom />
            </Headerr>
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;


