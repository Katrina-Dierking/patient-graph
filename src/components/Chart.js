import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    BarChart, 
    CartesianGrid,
    XAxis, 
    YAxis, 
    Tooltip,
    Legend,
    Bar
} from 'recharts'


function Chart() {
    const [data, setData] = useState(null);
    const handleResponse = (data) => {
        setData(data);
    };

    useEffect(() => {
        axios
            .get("./patients")
            .then((res) => {
                handleResponse(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {data && (
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray= "3 3" />
                    <XAxis dataKey="age" />
                    <YAxis dataKey="day" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="age" fill = "#82ca9d" />
                </BarChart>
            )}
        </div>
    )
}

export default Chart
