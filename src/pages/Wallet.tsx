
type WalletProps = {

}

const Wallet: React.FC<WalletProps> = ({}) => {
        return (
          <div className="p-4 w-full flex flex-col">
            <div className="w-full items-center flex justify-between">
              <p className="text-[21px] text-[#001b21]">Your Wallet(s)</p>
              <button className="text-white text-base outline-none p-4 rounded-lg bg-primary">
                + Create New Wallet
              </button>
            </div>
          </div>
        );
}

export default Wallet;