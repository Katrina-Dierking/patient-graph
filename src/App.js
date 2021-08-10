import React, {Component} from 'react';
import {connect} from 'react-redux'
import { getPatientsRequest } from './redux/actions/actions-patients';
import PatientsList from '././components/PatientsList';
import BarGraph from './components/charts/BarGraph';
import LineGraph from './components/charts/LineGraph'
import AreaGraph from './components/charts/AreaGraph'
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
        <BarGraph />
        <LineGraph />
        <AreaGraph />
      

        <PatientsList patients={patients.items}/>
      </AppContainer>
        
    )
  }
}

export default connect(({patients}) => ({patients}), {
  getPatientsRequest
})(App);
