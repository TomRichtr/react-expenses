import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { dataPoints } = props;
  const valuesArray = dataPoints.map(({ value }) => value);

  const maxValue = Math.max(...valuesArray);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar value={value} maxValue={maxValue} label={label} key={label} />
      ))}
    </div>
  );
};

export default Chart;
