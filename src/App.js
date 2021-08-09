import React, {Component} from 'react';
import {connect} from 'react-redux'
import { getPatientsRequest } from './redux/actions/actions-patients';
import PatientsList from '././components/PatientsList';
import Chart from '././components/Chart';
import {AppContainer} from './styles/AppStyles'

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getPatientsRequest();
  }
  render(){
    const patients = this.props.patients;

    return (
      <AppContainer>
        <Chart />
        <PatientsList patients={patients.items}/>
      </AppContainer>
        
    )
  }
}

export default connect(({patients}) => ({patients}), {
  getPatientsRequest
})(App);
