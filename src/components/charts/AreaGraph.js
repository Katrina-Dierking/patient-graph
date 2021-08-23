import React, {useState, useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import GraphNavigation from '../../components/shared/GraphNavigation'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

  import axios from 'axios'

  import { HeaderWrap } from '../../styles/DashboardStyles'
import TopNav from '../shared/TopNav';
import PatientNav from '../shared/PatientNav';
// import {getPatientsRequest} from '../../redux/actions/actions-patients'



function AreaGraph() {

    const [data, setData] = useState(null);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getPatientsRequest())
    // }, [dispatch]);
 
    // const patient = useSelector((state) => state.patients.items)
  
    const handleResponse = (res) => {
      // console.log(res);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wendesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const transformedData = days.map((day, index) => {
        return {
          day,
          value: res[index].pts.length
        }
      })
      setData([...transformedData])
    }
  
    useEffect(() => {
      axios
        .get('./patients')
        .then((res) => handleResponse(res.data))
        .catch((err) => console.log(err));
    }, []);

  

    return (
        <div>
          <HeaderWrap>
                <h2 className="title">AREA GRAPH</h2>
                <TopNav />
            </HeaderWrap>
            <PatientNav />
          <h4>The Number of Patients Seen Each Day</h4>
            <AreaChart
                width={750}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
            />
            </AreaChart>
            <GraphNavigation />
        </div>
    )
}

export default AreaGraph
