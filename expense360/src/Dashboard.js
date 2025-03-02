import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [payments, setPayments] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/transactions").then((res) => setTransactions(res.data));
    axios.get("http://localhost:5000/accounts").then((res) => setAccounts(res.data));
    axios.get("http://localhost:5000/payments").then((res) => setPayments(res.data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-5 shadow-md">
        <h1 className="text-lg font-bold mb-4">ROCKET Money</h1>
        <nav>
          <ul className="space-y-3">
            <li className="font-semibold text-red-500">Dashboard</li>
            <li><Link to="/transactions" className="text-gray-600">Transactions</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Good morning, User!</h2>

        {/* Graph Section */}
        <div className="bg-white p-5 shadow-md rounded-xl mb-6">
          <h3 className="text-lg font-semibold">Current spend this month</h3>
          <p className="text-2xl font-bold text-purple-700">$3,298</p>
          <p className="text-sm text-gray-500">Payday in 8 days</p>
          <LineChart width={500} height={200} data={transactions}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-5 shadow-md rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Date</th>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{tx.date}</td>
                  <td>{tx.name}</td>
                  <td className="text-blue-500">{tx.category}</td>
                  <td className="font-semibold">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/4 p-5 bg-white shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Accounts</h3>
          <ul>
            {accounts.map((acc, index) => (
              <li key={index} className="flex justify-between border-t py-2">
                <span>{acc.type}</span>
                <span className={acc.positive ? "text-green-500" : ""}>{acc.balance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Payments */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Upcoming</h3>
          <ul>
            {payments.map((payment, index) => (
              <li key={index} className="flex justify-between border-t py-2">
                <span>{payment.name}</span>
                <span>{payment.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
