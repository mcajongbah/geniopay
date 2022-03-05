type WalletCardProps = {
    wallet: {
        name: string;
        balance: string;
        currency: string;
        image: string;
        color: string;
    }
};

const WalletCard: React.FC<WalletCardProps> = ({ wallet: {name, balance, currency, image, color} }) => {
  return (
    <div className={`p-6 rounded-2xl w-full space-y-4`} style={{backgroundColor: color }}>
      <div className="flex items-center justify-between">
        <span className="flex flex-col space-y-1">
          <p className="text-base text-[#001b21]">{name}</p>
          <p className="text-sm text-[#2b4146]">{currency}</p>
        </span>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={image} alt="Flag USA" />
        </div>
      </div>
      <h3 className="text-[#001b21] font-bold text-[28px]">{balance}</h3>
    </div>
  );
};
export default WalletCard;
