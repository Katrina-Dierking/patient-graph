import React, {useState, useEffect} from 'react'
import { PieChart, Pie } from 'recharts'
import axios from 'axios'



function PieGraph() {

    const [data, setData] = useState(null);
    const handleResponse = (data) => {
        setData(data);
    };

    useEffect(() => {
        axios
            .get("./patients")
            .then((res) => {
                handleResponse(res.data);
                console.log(data)
            })
            .catch((err) => console.error(err));
    }, [data]);


    return (
        <div>
            <h2>Patient Ages</h2>

            { data && (
            <PieChart width={800} height={800}>
            <Pie
                dataKey="age"
                startAngle={480}
                endAngle={0}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#e21979"
                border="#17c436"
                label = "ages"
            />
            </PieChart>
            )}
        </div>
    )
}

export default PieGraph
