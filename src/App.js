import React, {Component} from 'react';
import {connect} from 'react-redux'
import { getPatientsRequest } from './redux/actions/actions-patients';
import {AppContainer} from './styles/AppStyles'

import "semantic-ui-css/semantic.min.css"

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from './components/login/Login'
import Dashboard from './components/pages/Dashboard'
import LineGraph from '././components/charts/LineGraph'
import BarGraph from '././components/charts/BarGraph'
import AreaGraph from '././components/charts/AreaGraph'
import PatientFiles from './components/patient/patientListFiles/PatientListFiles'
import PatientCardList from './components/patient/patientCardFiles/PatientCardList'



class App extends Component {
  constructor(props) {
    super(props);

    this.props.getPatientsRequest();
  }
  
  render(){
    // const patients = this.props.patients;

    return (
      <AppContainer>

        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path = '/about' component={About} />
            <Route path = '/login' component={Login} />
            <Route path = '/dashboard' component={Dashboard} />
            <Route path = '/linegraph' component={LineGraph} />
            <Route path = '/bargraph' component={BarGraph} />
            <Route path = '/areagraph' component={AreaGraph} />
            <Route path = '/patientfiles' component={PatientFiles} />
            <Route path = '/patientcardlist' component={PatientCardList} />
        

          </Switch>
        </Router>
      </AppContainer>
        
    )
  }
}

export default connect(({patients}) => ({patients}), {
  getPatientsRequest
})(App);
