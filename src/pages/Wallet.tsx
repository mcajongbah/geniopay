import { useState } from "react";
import { Search } from "../components";

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
        <div className="w-2/5 px-2 py-4 bg-white">
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
            <button className="text-center py-[6px] px-7 border-b-4 border-primary">
              Active(3)
            </button>
            <button className="text-center py-[6px] px-7">Inactive(2)</button>
            <button className="text-center py-[6px] px-7">Closed(0)</button>
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
        <div className="w-3/5 bg-blue-400 h-9 p-4"></div>
      </div>
    </div>
  );
};

export default Wallet;
