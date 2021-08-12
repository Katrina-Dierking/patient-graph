import React, {useEffect, useState} from "react";
import GraphNavigation from '../../components/shared/GraphNavigation'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from "axios";


function LineGraph() {
    const [data, setData] = useState(null);
  
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
      <>
      <h2>Line Graph</h2>
      <h4>The Number of Patients Seen Each Day</h4>
        <LineChart
            width={760}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 5,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="value"
                stroke="#17c436"
                strokeDasharray="5 5"
            />
      </LineChart>
      <GraphNavigation />
      </>
    )
}

export default LineGraph