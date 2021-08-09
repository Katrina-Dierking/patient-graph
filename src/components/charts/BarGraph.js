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



export default function BarGraph() {
  const [data, setData] = useState(null);

  const handleResponse = (res) => {
    console.log(res);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wendesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const transFormedData = days.map((day) => {
      const d = day.toLowerCase();
      return {
        day,
        value: res.patients[d] ? res.patients[d].length : 0
      };
    });

    setData([...transFormedData]);
  };

  useEffect(() => {
    axios
      .get("./patients")
      .then((res) => handleResponse(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
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
