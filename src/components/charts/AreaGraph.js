import React, {useState, useEffect} from 'react'
import GraphNavigation from '../../components/shared/GraphNavigation'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
  import { curveCardinal } from "d3-shape";
  import axios from 'axios'



function AreaGraph() {

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
        .get("./patients")
        .then((res) => handleResponse(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
          <h2>Area Graph</h2>
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
            {/* <Area
                type={cardinal}
                dataKey="gender"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
             /> */}
            </AreaChart>
            <GraphNavigation />
        </div>
    )
}

export default AreaGraph
