import React, {useEffect, useState} from "react";
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
        .get("./patients")
        .then((res) => handleResponse(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
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
    )
}

export default LineGraph