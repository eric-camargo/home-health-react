import React, { Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Spinner from './components/UI/Spinner';

// import logo from './logo.svg';
import './App.css';
import AuthContext from './store/auth-context';

import Login from './pages/Login'
import Patients from './pages/Patients'
import PatientDetails from './pages/PatientDetail'
import Appointments from './pages/Appointments'

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/' exact>
            {authCtx.isLoggedIn && <Redirect to='/pacientes' />}
            {!authCtx.isLoggedIn && <Redirect to='/login' />}
          </Route>
          {!authCtx.isLoggedIn &&
            <Route path='/login'>
              <Login />
            </Route>
          }
          {authCtx.isLoggedIn && 
            <Route path='/pacientes' exact>
              <Patients />
            </Route>
          }
          {authCtx.isLoggedIn && 
            <Route path='/pacientes/:patientId'>
              <PatientDetails />
            </Route>
          }
          {authCtx.isLoggedIn && 
            <Route path='/atendimento/:appointmentId'>
              <Appointments />
            </Route>
          }
          {authCtx.isLoggedIn && 
            <Route path='/atendimentos'>
              <Appointments />
            </Route>
          }
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
