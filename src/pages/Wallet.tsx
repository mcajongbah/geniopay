import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LineChart, Search } from "../components";
import {
  ExchangeIcon,
  PayInIcon,
  PayOutIcon,
  SendIcon,
  StatusIcon,
} from "../components/Icons";

type WalletProps = {};

const Wallet: React.FC<WalletProps> = ({}) => {
  const [wallet, setWallet] = useState("All");
  return (
    <div className="p-4 w-full flex flex-col">
      <div className="w-full items-center flex justify-between">
        <p className="text-[21px] text-[#001b21]">Your Wallet(s)</p>
        <button className="text-white text-base outline-none p-4 rounded-lg bg-primary">
          + Create New Wallet
        </button>
      </div>

      <div className="w-full flex space-x-8 px-4 mt-6">
        <div className="w-2/5 h-max rounded-lg px-2 py-4 bg-white">
          <div className="flex justify-between items-center">
            <Search />
            <select
              className="outline-none text-primary text-base"
              name="wallet"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            >
              <option value="All">All</option>
            </select>
          </div>

          <div className="flex items-center text-[#001B21] mt-6 justify-between">
            <NavLink to="/wallet">
              {({ isActive }) => (
                <button
                  className={`text-center py-[6px] px-7 ${
                    isActive ? "border-b-4 border-primary" : ""
                  }`}
                >
                  Active(3)
                </button>
              )}
            </NavLink>

            <NavLink to="/wallet/inactive">
              {({ isActive }) => (
                <button
                  className={`text-center py-[6px] px-7 ${
                    isActive ? "border-b-4 border-primary" : ""
                  }`}
                >
                  Inactive(2)
                </button>
              )}
            </NavLink>

            <NavLink to="/wallet/closed">
              {({ isActive }) => (
                <button
                  className={`text-center py-[6px] px-7 ${
                    isActive ? "border-b-4 border-primary" : ""
                  }`}
                >
                  Closed(0)
                </button>
              )}
            </NavLink>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            <div className="flex items-center rounded-lg p-4 bg-[#EEF7F9] justify-between">
              <div className="flex items-center space-x-2">
                <img src="./assets/eur.png" alt="EUR Wallet" />
                <span className="flex flex-col space-y-1">
                  <p className="text-base text-[#001B21]">EUR Wallet</p>
                  <p className="text-sm text-[#2B4146]">EUR</p>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-base font-bold text-[#2B4146]">
                  €2,000,000.50
                </p>
                <p className="text-sm text-[#2B4146]">Default</p>
              </div>
            </div>

            <div className="flex items-center rounded-lg p-4 hover:bg-[#EEF7F9] justify-between">
              <div className="flex items-center space-x-2">
                <img src="./assets/usa.png" alt="Personal account" />
                <span className="flex flex-col space-y-1">
                  <p className="text-base text-[#001B21]">Personal account</p>
                  <p className="text-sm text-[#2B4146]">USD</p>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-base font-bold text-[#2B4146]">$10,250.00</p>
              </div>
            </div>

            <div className="flex items-center rounded-lg p-4 hover:bg-[#EEF7F9] justify-between">
              <div className="flex items-center space-x-2">
                <img src="./assets/uk.png" alt="School saving" />
                <span className="flex flex-col space-y-1">
                  <p className="text-base text-[#001B21]">School saving</p>
                  <p className="text-sm text-[#2B4146]">GBP</p>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-base font-bold text-[#2B4146]">£500.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 rounded-lg px-12 py-4 bg-white">
          <div className="flex justify-between rounded-2xl px-6 py-7 border border-[#F3F4F6] items-center">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-green-500 text-xs">Active</p>
              </div>
              <p className="text-base text-[#001B21]">EUR Wallet</p>
              <p className="text-base text-[#0A6375]">EUR</p>
            </div>
            <p className="text-[40px] text-[#001B21] font-extrabold">
              €2,000,000.50
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-8 mt-6">
            <div className="flex items-center space-x-5">
              <p className="text-body text-sm">Ledger Balance</p>
              <p className="text-title text-base">2,000,000.50</p>
            </div>
            <div className="flex items-center space-x-5">
              <p className="text-body text-sm">Total Incoming</p>
              <p className="text-title text-base">€2,000,000.50</p>
            </div>
            <div className="flex items-center space-x-5">
              <p className="text-body text-sm">Blocked Balance</p>
              <p className="text-title text-base">€0.00</p>
            </div>
            <div className="flex items-center space-x-5">
              <p className="text-body text-sm">Total Outgoing</p>
              <p className="text-title text-base">€5,000,000.50</p>
            </div>
          </div>

          <div className="flex mt-6 items-center justify-between">
            <button className="outline-none w-[156px] flex items-center justify-center space-x-1 h-14 rounded-lg border border-primary text-primary">
              <SendIcon />
              <p>Payment</p>
            </button>
            <button className="outline-none w-[156px] flex items-center justify-center space-x-1 h-14 rounded-lg border border-primary text-primary">
              <PayInIcon />
              <p>Pay In</p>
            </button>
            <button className="outline-none w-[156px] flex items-center justify-center space-x-1 h-14 rounded-lg border border-primary text-primary">
              <ExchangeIcon />
              <p>Exchange</p>
            </button>
          </div>

          <select
            className="outline-none mt-6 text-primary text-base"
            name="wallet"
            id="wallet"
          >
            <option value="more options">More Options</option>
          </select>

          <div className="flex items-center text-[#001B21] mt-6">
            <button className="text-center py-[6px] px-7 border-b-4 border-primary">
              Activity
            </button>
            <button className="text-center py-[6px] px-7">Transactions</button>
            <button className="text-center py-[6px] px-7">Invoices</button>
          </div>

          <div className="flex space-y-9 mb-8 items-end flex-col">
            <div>
              <select
                className="outline-none mt-6 text-primary text-base"
                name="wallet"
                id="wallet"
              >
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div className="flex w-full items-center justify-between">
              <button className="flex items-center space-x-4">
                <StatusIcon />
                <span className="flex flex-col space-y-1 text-left">
                  <p className="text-body text-sm">Total transactions</p>
                  <p className="text-title font-bold text-base">$88,600.00</p>
                </span>
              </button>

              <button className="flex outline-none text-[#16A34A] items-center space-x-4">
                <PayInIcon />
                <span className="flex flex-col space-y-1 text-left">
                  <p className="text-body text-sm">Pay-In</p>
                  <p className="text-title font-bold text-base">$4,600.00</p>
                </span>
              </button>

              <button className="flex outline-none items-center text-[#DC2626] space-x-4">
                <PayOutIcon />
                <span className="flex flex-col space-y-1 text-left">
                  <p className="text-body text-sm">Pay-Out</p>
                  <p className="text-title font-bold text-base">$72,600.00</p>
                </span>
              </button>
            </div>
          </div>

          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
