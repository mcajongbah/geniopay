import { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, QuickLinkCard, WalletCard } from "../components";
import {
  PayInIcon,
  PayOutIcon,
  StatusIcon,
  WalletIcon,
} from "../components/Icons";

type DashboardProps = {};

const wallets = [
  {
    name: "Personal account",
    balance: "$10,250.00",
    currency: "USD",
    image: "./assets/usa.png",
    color: "#fff6e6",
  },
  {
    name: "EUR wallet",
    balance: "€4000.53",
    currency: "EUR",
    image: "./assets/eur.png",
    color: "#FBF1F0",
  },
  {
    name: "School fees",
    balance: "£50.00",
    currency: "GBP",
    image: "./assets/uk.png",
    color: "#DDECEF",
  },
];

const quickLinks = [
  {
    name: "Add new Wallet",
    icon: "./assets/wallet-2.svg",
    color: "bg-[#F97316]",
  },
  {
    name: "Add new Card",
    icon: "./assets/card.svg",
    color: "bg-[#005061]",
  },
  {
    name: "Balance Exchange",
    icon: "./assets/dollar-square.svg",
    color: "bg-[#F59E0B]",
  },
  {
    name: "Transfer to Account",
    icon: "./assets/arrange-circle.svg",
    color: "bg-[#5EEAD4]",
  },
  {
    name: "Generate Voucher",
    icon: "./assets/ticket.svg",
    color: "bg-[#9333EA]",
  },
  {
    name: "Mobile Money",
    icon: "./assets/money.svg",
    color: "bg-[#FFCB00]",
  },
  {
    name: "Payment Link",
    icon: "./assets/link-2.svg",
    color: "bg-[#F43F5E]",
  },
];

const transactions = [
  {
    name: "Total transactions",
    value: "$88,600.00",
    icon: <StatusIcon />,
  },
  {
    name: "Pay-In",
    value: "$4,600.00",
    icon: <PayInIcon />,
  },
  {
    name: "Pay-Out",
    value: "$72,600.00",
    icon: <PayOutIcon />,
  },
];

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [activity, setActivity] = useState("Month");
  return (
    <div className="p-4 w-full flex flex-col">
      <div className="w-full items-center flex justify-between">
        <p className="text-[21px] text-[#001b21]">Wallet (5)</p>
        <Link to="/wallet" className="text-primary text-base">
          View all wallets
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-y-4 lg:gap-y-0 lg:gap-x-4">
        {wallets.map((wallet, index) => (
          <WalletCard wallet={wallet} key={index} />
        ))}
      </div>

      <div className="flex lg:mt-14 mt-7 flex-col">
        <p className="text-[#001B21] text-[21px]">Quick Links</p>
        <p className="text-base text-slate-400">
          Your frequently used actions for easy access.
        </p>
      </div>

      <div className="flex w-full justify-between lg:justify-start flex-wrap gap-y-4 lg:gap-y-0 lg:space-x-4 mt-6 items-center">
        {quickLinks.map((link, index) => (
          <QuickLinkCard key={index} link={link} />
        ))}
      </div>
      <div className="flex flex-col w-full space-y-5">
        <div className="flex justify-between items-center mt-4 lg:mt-[72px]">
          <div className="flex lg:space-x-9 space-x-2 items-center justify-center">
            <p className="text-[#001b21] text-[21px]">Activity</p>

            <select
              className="outline-none text-primary text-sm lg:text-base"
              name="activity"
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <button className="text-primary text-sm lg:text-base">
            View Transaction History
          </button>
        </div>

        <div className="flex justify-between md:justify-end md:space-x-16">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center space-x-2 lg:space-x-4">
              <span>{transaction.icon}</span>
              <span className="flex flex-col">
                <p className="text-[#2b4146] text-xs">{transaction.name}</p>
                <p className="text-[#001B21] text-sm">{transaction.value}</p>
              </span>
            </div>
          ))}
        </div>

        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
