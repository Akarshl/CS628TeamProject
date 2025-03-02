require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TransactionSchema = new mongoose.Schema({
  date: String,
  name: String,
  category: String,
  amount: String,
});

const AccountSchema = new mongoose.Schema({
  type: String,
  balance: String,
  positive: Boolean,
});

const PaymentSchema = new mongoose.Schema({
  name: String,
  amount: String,
  due: String,
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
const Account = mongoose.model("Account", AccountSchema);
const Payment = mongoose.model("Payment", PaymentSchema);

app.get("/transactions", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.get("/accounts", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

app.get("/payments", async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
