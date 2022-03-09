// @ts-nocheck

import { useEffect, useRef } from "react";
import * as d3 from "d3";

type LineChartProps = {};

type LineChartData = {
  date: string;
  value: number;
};

const LineChart: React.FC<LineChartProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);

  let data: LineChartData[] = [
    { date: "2019-01-01", value: 3700 },
    { date: "2019-02-01", value: 3100 },
    { date: "2019-03-01", value: 3500 },
    { date: "2019-04-01", value: 3050 },
    { date: "2019-05-01", value: 2300 },
    { date: "2019-06-01", value: 3200 },
    { date: "2019-07-01", value: 3800 },
  ];

  useEffect(() => {
    if (ref.current) {
      const height = ref.current?.clientHeight;
      const width = ref.current?.clientWidth;
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const dateParser = d3.timeParse("%Y-%m-%d");

      d3.select(ref.current).selectAll("*").remove();

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => dateParser(d.date)))
        .range([50, width - margin.left - margin.right])
        .nice();

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => +d.value)])
        .range([height - margin.top - margin.bottom, 0])
        .nice();

      const xAxis = (g) =>
        g
          .attr(
            "transform",
            `translate(0, ${height - margin.top - margin.bottom})`
          )
          .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")))
          .call((g) => g.select(".domain").remove())
          .call((g) => g.selectAll(".tick line").remove())
          .call((g) =>
            g
              .selectAll(".tick text")
              .attr("class", "lg:text-2xl md:text-lg text-sm")
              .attr("fill", "#2B4146")
          );

      const yAxis = (g) =>
        g
          .call(
            d3
              .axisLeft(y)
              .ticks(4)
              .tickSizeOuter(0)
              .tickFormat(function (d) {
                return "$" + d3.format(".1s")(d);
              })
          )
          .call((g) => g.select(".domain").remove())
          .call((g) => g.selectAll(".tick line").remove())
          .call((g) =>
            g
              .selectAll(".tick text")
              .attr("class", "lg:text-2xl md:text-lg text-sm")
              .attr("fill", "#2B4146")
          );

      svg.append("g").call(xAxis);

      svg.append("g").call(yAxis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#008AA8")
        .attr("class", "lg:stroke-[5.89px] md:stroke-[3.5px] stroke-2")
        .attr("stroke-linecap", "round")
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(dateParser(d.date)))
            .y((d) => y(d.value))
            .curve(d3.curveBasis)
        );
    }
  }, [data]);

  return (
    <div className="px-6 h-[327px]">
      <div ref={ref} className="w-full h-full" id="line-chart"></div>
    </div>
  );
};
export default LineChart;
