type QuickLinkCardProps = {
  link: {
    name: string;
    icon: string;
    color: string;
  };
};

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
  link: { name, icon, color },
}) => {
  return (
    <button className="lg:py-6 py-3 items-center space-y-4 lg:h-full lg:max-w-[120px] max-w-[100px] justify-center outline-none lg:px-4 border border-slate-300 rounded-lg flex-col flex">
      <span className={`flex items-center justify-center w-8 h-8 ${color} rounded-full`}>
        <img src={icon} alt={name} />
      </span>
      <p className="text-sm text-[#001B21] px-2">{name}</p>
    </button>
  );
};

export default QuickLinkCard;
