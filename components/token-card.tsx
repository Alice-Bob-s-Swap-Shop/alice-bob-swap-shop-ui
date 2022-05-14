import { useDrag } from "react-dnd";

import { BoardTypes, ItemTypes, Token } from "../models";
import { useAppDispatch } from "../store/hooks/redux";
import { moveToken } from "../store/swap/swap-slice";

const TokenCard: React.FC<{ token: Token }> = ({ token }) => {
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TOKENCARD,
    item: token,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ name: BoardTypes }>();
      if (item && dropResult) {
        dispatch(moveToken({ toBoard: dropResult.name, token: item }));
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
