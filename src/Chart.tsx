import { TimeSeries } from "pondjs";
import {
  ChartContainer,
  ChartRow,
  Charts,
  LineChart,
  YAxis,
} from "react-timeseries-charts";


interface Props {
    
}

const Chart: React.FC<Props> = () => {

  const series1 = new TimeSeries({
    name: "AUD",
    columns: ["time", "aud"],
    points: [
      [1, 1.5],
      [2, 1.7],
      [3, 1.2],
      [4, 1.5],
      [5, 1.1],
    ],
  });

  const series2 = new TimeSeries({
    name: "Lolz",
    columns: ["time", "aud"],
    points: [
      [1, 1.5],
      [2, 1.7],
      [3, 1.2],
      [4, 1.5],
      [5, 1.1],
    ],
  });

  
  return (
    <ChartContainer timeRange={series1.timerange()} width={800}>
      <ChartRow height="200">
        <YAxis
          id="axis1"
          label="AUD"
          min={0.5}
          max={5}
          width="60"
          type="linear"
          format="$,.2f"
        />
        <Charts>
          <LineChart axis="axis1" series={series1} column={["aud"]} />
       {/*    <LineChart axis="axis2" series={series2} column={["euro"]} /> */}
        </Charts>
       {/*  <YAxis
          id="axis2"
          label="Euro"
          min={0.5}
          max={1.5}
          width="80"
          type="linear"
          format="$,.2f"
        /> */}
      </ChartRow>
    </ChartContainer>
  );
};

export default Chart;