import React from "react";
import { Container, Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const transactions = [
  { date: "1/7", name: "Akarsh", category: "Entertainment", amount: "$2.95" },
  { date: "1/7", name: "Akarsh", category: "Transit", amount: "$28.32" },
  { date: "1/7", name: "Akarsh", category: "Dining", amount: "$6.36" },
  { date: "1/6", name: "Akarsh", category: "Health", amount: "$17.43" },
];

const data = [
  { name: "Week 1", spending: 400 },
  { name: "Week 2", spending: 300 },
  { name: "Week 3", spending: 500 },
  { name: "Week 4", spending: 200 },
];

const FrontPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Typography variant="h4" mt={4} mb={2}>
        Good morning, Likitha!
      </Typography>

      {/* Charts Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Current spend this month: <strong>$3,298</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Payday in 8 days
        </Typography>

        <Box display="flex" gap={3} mt={2}>
          <BarChart width={300} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="spending" fill="#8884d8" />
          </BarChart>

          <LineChart width={300} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="spending" stroke="#82ca9d" />
          </LineChart>
        </Box>
      </Paper>

      {/* Recent Transactions */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index}>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.name}</TableCell>
                <TableCell>{tx.category}</TableCell>
                <TableCell>{tx.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default FrontPage;
