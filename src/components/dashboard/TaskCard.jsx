import { useState } from "react";
import { useDrag } from "react-dnd";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskCard = ({ task }) => {
  const { title, description } = task || {};
  const [showActionBtn, setShowActionBtn] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="card hover:cursor-move bg-base-200 shadow-sm rounded-md"
      onMouseEnter={() => setShowActionBtn(true)}
      onMouseLeave={() => setShowActionBtn(false)}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">
            {title.length > 20 ? title.slice(0, 35) : title}
          </h2>
          {showActionBtn && (
            <div className="flex gap-3">
              <button className="text-xl">
                <FaRegEdit />
              </button>
              <button className="text-xl">
                <RiDeleteBin2Line />
              </button>
            </div>
          )}
        </div>
        <p>
          {description.length > 80 ? description.slice(0, 80) : description}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
