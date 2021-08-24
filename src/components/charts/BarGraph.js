import React, { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

import axios from "axios";




function BarGraph() {
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
      <div>
       
          <h2>BAR GRAPH</h2>
          <h3>Number of Patients Seen Each Day</h3>
          <br></br>
        <BarChart width={930} height={450} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#e21979" />
        </BarChart>
      </div>
    );
  }

export default BarGraph