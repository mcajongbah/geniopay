import { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, QuickLinkCard, WalletCard } from "../components";
import { WalletIcon } from "../components/Icons";

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
    icon: <WalletIcon />,
  },
  {
    name: "Add new Card",
    icon: <WalletIcon />,
  },
  {
    name: "Balance Exchange",
    icon: <WalletIcon />,
  },
  {
    name: "Transfer to Account",
    icon: <WalletIcon />,
  },
  {
    name: "Generate Voucher",
    icon: <WalletIcon />,
  },
  {
    name: "Mobile Money",
    icon: <WalletIcon />,
  },
  {
    name: "Payment Link",
    icon: <WalletIcon />,
  },
];

const transactions = [
  {
    name: "Total transactions",
    value: "$88,600.00",
    icon: <WalletIcon />,
  },
  {
    name: "Pay-In",
    value: "$4,600.00",
    icon: <WalletIcon />,
  },
  {
    name: "Pay-Out",
    value: "$72,600.00",
    icon: <WalletIcon />,
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

      <div className="grid grid-cols-3 mt-4 gap-x-4">
        {wallets.map((wallet, index) => (
          <WalletCard wallet={wallet} key={index} />
        ))}
      </div>

      <div className="flex mt-14 flex-col">
        <p className="text-[#001B21] text-[21px]">Quick Links</p>
        <p className="text-base text-slate-400">
          Your frequently used actions for easy access.
        </p>
      </div>

      <div className="flex space-x-4 mt-6 items-center">
        {quickLinks.map((link, index) => (
          <QuickLinkCard key={index} link={link} />
        ))}
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center mt-[72px]">
          <div className="flex space-x-9 items-center justify-center">
            <p className="text-[#001b21] text-[21px]">Activity</p>

            <select
              className="outline-none text-primary text-base"
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
          <button className="text-primary text-base">
            View Transaction History
          </button>
        </div>

        <div className="flex justify-end space-x-16">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center space-x-4">
                {transaction.icon}
                <span className="flex flex-col">
                  <p className="text-[#2b4146] text-sm">{transaction.name}</p>
                  <p className="text-[#001B21] text-base">
                    {transaction.value}
                  </p>
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
