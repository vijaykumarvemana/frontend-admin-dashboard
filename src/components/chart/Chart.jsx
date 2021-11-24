import "./Chart.css"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({title,data, datakey, grid}) => {
    return(
        <div className="chart">
            <h3 className="chart-Title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#615E3F"/>
                    <Line type="monotone" dataKey={datakey} stroke="black" strokeWidth="2" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#F3F3F1" strokeDasharray="5 5"/>}
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

 export default Chart