
type QuickLinkCardProps = {

}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({}) => {
        return (
          <button className="py-6 outline-none px-4 border border-slate-300 rounded-lg flex-col flex">
            <span className="flex items-center justify-center w-8 h-8 rounded-full"></span>
            <p className="text-sm text-[#001B21]"></p>
          </button>
        );
}

export default QuickLinkCard;