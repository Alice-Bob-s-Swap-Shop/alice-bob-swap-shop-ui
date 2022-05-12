import { useDrop } from "react-dnd";
import { ItemTypes } from "../models/item-types";

interface IProps {
  name: string;
  children?: React.ReactNode;
}

const SwapBoard: React.FC<IProps> = ({ name, children }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TOKENCARD,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="flex-1 border rounded bg-slate-200 flex flex-wrap gap-2 p-4"
    >
      {children}
    </div>
  );
};

export default SwapBoard;
