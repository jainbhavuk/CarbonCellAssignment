import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PopulationChartProps } from "./types";
import { Box } from "@mui/material";

/**
 * PopulationChart component displays a line chart representing population data over the years.
 * @param {PopulationChartProps} props - The props for the PopulationChart component.
 * @returns {JSX.Element} - JSX element representing the PopulationChart component.
 */
const PopulationChart = ({ data }: PopulationChartProps): JSX.Element => {
  return (
    <Box p={2} sx={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 20, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="Year"
            tick={{ fontSize: 14, fontWeight: "bold", fill: "#333" }}
            dy={15}
          />
          <YAxis tick={{ fontSize: 14, fontWeight: "bold", fill: "#333" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
            cursor={{ stroke: "#aaa", strokeWidth: 1 }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="Population"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ stroke: "#8884d8", fill: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PopulationChart;
