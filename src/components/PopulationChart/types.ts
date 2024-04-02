/**
 * Represents the structure of population data.
 */
type PopulationData = {
  /** The year. */
  Year: string;
  /** The population. */
  Population: number;
  // Add more properties if needed
};

/**
 * Props for the PopulationChart component.
 */
export type PopulationChartProps = {
  /** The population data to be displayed on the chart. */
  data: PopulationData[];
};
