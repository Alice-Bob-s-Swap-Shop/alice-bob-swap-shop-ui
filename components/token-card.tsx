import Moralis from "moralis/types";

interface IProps {
  token: Moralis.NFTResult & {
    metadata?: any;
  };
}

const TokenCard: React.FC<IProps> = ({ token }) => {
  return (
    <div className="w-32">
      <img className={`w-32 h-32`} src={token.metadata?.image}></img>
      <div className="overflow-hidden text-ellipsis">
        {token.name || "No Name"}
      </div>
      <div className="overflow-hidden text-ellipsis">{token.amount || 1}</div>
    </div>
  );
};

export default TokenCard;
