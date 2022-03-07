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
    <button className="py-6 items-center space-y-4 h-full max-w-[120px] justify-center outline-none px-4 border border-slate-300 rounded-lg flex-col flex">
      <span className={`flex items-center justify-center w-8 h-8 ${color} rounded-full`}>
        <img src={icon} alt={name} />
      </span>
      <p className="text-sm text-[#001B21] px-2">{name}</p>
    </button>
  );
};

export default QuickLinkCard;
