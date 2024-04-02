import { useEffect, useState } from "react";
import axios from "axios";
import PopulationChart from "../../components/PopulationChart/PopulationChart";
import { Box, Typography } from "@mui/material";

import { URL } from "./constants";

/**
 * PopulationChartContainer component fetches population data from an API
 * and renders a PopulationChart component to visualize the data.
 */
const PopulationChartContainer = () => {
  // State to store population data
  const [populationData, setPopulationData] = useState([]);

  // Fetch population data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get(URL);
        const data = response.data.data;
        // Update state with fetched data
        setPopulationData(data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <Box>
      {/* Title for the population chart */}
      <Typography variant="h3" fontWeight="bold">
        Population Stats
      </Typography>
      {/* Render the PopulationChart component with fetched data */}
      <PopulationChart data={populationData} />
    </Box>
  );
};

export default PopulationChartContainer;
