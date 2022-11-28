import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTheme, ApexTooltip, ApexDataLabels, ApexLegend, ApexGrid } from "ng-apexcharts";

export type salesChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: any;
    theme: ApexTheme;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    colors: string[];
    markers: any;
    grid: ApexGrid;
  };