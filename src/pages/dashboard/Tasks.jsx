import { FiPlusCircle } from "react-icons/fi";
import Stage from "../../components/dashboard/Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Tasks = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="flex items-center justify-between mt-10 border-b border-b-sky-100 pb-2">
          <h2 className="text-2xl font-bold">Task Management</h2>
          <button className="btn bg-sky-300 text-white">
            <FiPlusCircle />
            Create Task
          </button>
        </div>
        <div className="flex justify-between mt-5 gap-4">
          <Stage stage="Todo" />
          <Stage stage="Ongoing" />
          <Stage stage="Completed" />
        </div>
      </div>
    </DndProvider>
  );
};

export default Tasks;
