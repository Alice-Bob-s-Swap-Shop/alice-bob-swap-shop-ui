import Moralis from "moralis/types";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../models/item-types";

interface IProps {
  token: Moralis.NFTResult & {
    metadata?: any;
  };
}

const TokenCard: React.FC<IProps> = ({ token }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TOKENCARD,
    item: token,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ name: string }>();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.5 : 1;
  return (
    <div ref={drag} className="w-32" style={{ opacity }}>
      <img className={`w-32 h-32`} src={token.metadata?.image}></img>
      <div className="overflow-hidden text-ellipsis">
        {token.name || "No Name"}
      </div>
      <div className="overflow-hidden text-ellipsis">{token.amount || 1}</div>
    </div>
  );
};

export default TokenCard;
