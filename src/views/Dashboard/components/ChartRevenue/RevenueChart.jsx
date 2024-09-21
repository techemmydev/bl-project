import React, { useState } from "react";
import style from "./Revenue.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  FormControl,
  useMediaQuery,
} from "@mui/material";

const monthlyData = [
  { name: "Jan", Savings: 4000, Loan: 2400, Ajo: 2400 },
  { name: "Feb", Savings: 3000, Loan: 1398, Ajo: 2210 },
  { name: "Mar", Savings: 2000, Loan: 9800, Ajo: 2290 },
  { name: "Apr", Savings: 2780, Loan: 3908, Ajo: 2000 },
  { name: "May", Savings: 1890, Loan: 4800, Ajo: 2181 },
  { name: "Jun", Savings: 2390, Loan: 3800, Ajo: 2500 },
  { name: "Jul", Savings: 3490, Loan: 4300, Ajo: 2100 },
  { name: "Aug", Savings: 3000, Loan: 2400, Ajo: 2400 },
  { name: "Sep", Savings: 2780, Loan: 3908, Ajo: 2000 },
  { name: "Oct", Savings: 1890, Loan: 4800, Ajo: 2181 },
  { name: "Nov", Savings: 2390, Loan: 3800, Ajo: 2500 },
  { name: "Dec", Savings: 3490, Loan: 4300, Ajo: 2100 },
];

const weeklyData = [
  { name: "Week 1", Savings: 1000, Loan: 600, Ajo: 800 },
  { name: "Week 2", Savings: 1500, Loan: 1200, Ajo: 1000 },
  { name: "Week 3", Savings: 2000, Loan: 800, Ajo: 1200 },
  { name: "Week 4", Savings: 2500, Loan: 1000, Ajo: 1500 },
];

const RevenueChart = () => {
  const [timeframe, setTimeframe] = useState("monthly");
  const [selectedMetrics, setSelectedMetrics] = useState({
    Savings: true,
    Loan: true,
    Ajo: true,
  });

  const isMobile = useMediaQuery("(max-width: 760px)");

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  const handleMetricChange = (event) => {
    setSelectedMetrics({
      ...selectedMetrics,
      [event.target.name]: event.target.checked,
    });
  };

  const chartData = timeframe === "monthly" ? monthlyData : weeklyData;

  return (
    <div className={style.venue}>
      <Card
        sx={{
          backgroundColor: "#F4F5F6",
          width: isMobile ? "100%" : "700px", // Mobile: 100%, Desktop: 700px
          height: isMobile ? "280px" : "300px", // Reduce height on mobile
        }}
      >
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: isMobile ? "12px" : "14px", // Adjust font size
                color: "#000000",
                fontWeight: "600",
              }}
            >
              Revenue
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="timeframe"
                name="timeframe"
                value={timeframe}
                onChange={handleTimeframeChange}
              >
                <FormControlLabel
                  value="monthly"
                  control={<Radio sx={{ fontSize: "12px" }} />}
                  label={
                    <Typography sx={{ fontSize: isMobile ? "10px" : "12px" }}>
                      Monthly
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="weekly"
                  control={<Radio sx={{ fontSize: "12px" }} />}
                  label={
                    <Typography sx={{ fontSize: isMobile ? "10px" : "12px" }}>
                      Weekly
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedMetrics.Savings}
                  onChange={handleMetricChange}
                  name="Savings"
                />
              }
              label={
                <Typography sx={{ fontSize: isMobile ? "10px" : "12px" }}>
                  Savings
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedMetrics.Loan}
                  onChange={handleMetricChange}
                  name="Loan"
                />
              }
              label={
                <Typography sx={{ fontSize: isMobile ? "10px" : "12px" }}>
                  Loan
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedMetrics.Ajo}
                  onChange={handleMetricChange}
                  name="Ajo"
                />
              }
              label={
                <Typography sx={{ fontSize: isMobile ? "10px" : "12px" }}>
                  Ajo
                </Typography>
              }
            />
          </FormGroup>
          <ResponsiveContainer width="100%" height={isMobile ? 150 : 200}>
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke="none" />
              <XAxis
                dataKey="name"
                stroke="none"
                tick={{ fill: "#000000", fontSize: isMobile ? "10px" : "12px" }}
              />
              <YAxis tick={false} stroke="none" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              {selectedMetrics.Savings && (
                <Area
                  type="monotone"
                  dataKey="Savings"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              )}
              {selectedMetrics.Loan && (
                <Area
                  type="monotone"
                  dataKey="Loan"
                  stroke="#DDF4FF"
                  fill="#A9CBD9"
                  strokeWidth={3}
                />
              )}
              {selectedMetrics.Ajo && (
                <Area
                  type="monotone"
                  dataKey="Ajo"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueChart;
