import React, {useState, useEffect} from 'react'
import { PieChart, Pie } from 'recharts'
import axios from 'axios'



function PieGraph() {

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
            <h2>Number of Patients seen Each day</h2>


            <PieChart width={800} height={800}>
            <Pie
                dataKey="pts"
                startAngle={480}
                endAngle={0}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#e21979"
                border="#17c436"
                label = "days"
            />
            </PieChart>
            
        </div>
    )
}

export default PieGraph
