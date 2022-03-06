import { useState } from "react";
import { Search } from "../components";

type WalletProps = {

}

const Wallet: React.FC<WalletProps> = ({}) => {
  const [wallet, setWallet] = useState('All');
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
                  <button className="text-center py-[6px] px-7">
                    Inactive(2)
                  </button>
                  <button className="text-center py-[6px] px-7">
                    Closed(0)
                  </button>
                </div>
              </div>
              <div className="w-3/5 bg-blue-400 h-9 p-4"></div>
            </div>
          </div>
        );
}

export default Wallet;