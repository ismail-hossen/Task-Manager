import { FiPlusCircle } from "react-icons/fi";
import Stage from "../../components/dashboard/Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "../../components/Modal";
import CreateTaskForm from "../../components/dashboard/CreateTaskForm";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";

const Tasks = () => {
  const stages = ["Todo", "Ongoing", "Completed"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [refetch, setRefetch] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    if (refetch) {
      setRefetch(false);
      axios.get(`http://localhost:4000/tasks/${user?.email}`).then((res) => {
        if (res?.data) {
          setTasks(res.data);
        }
      });
    }
  }, [user, refetch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredTasks = (stage) => {
    const data = tasks?.filter(
      (t) => t.stage.toLowerCase() === stage.toLowerCase()
    );
    return data;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="flex items-center justify-between mt-10 border-b border-b-sky-100 pb-2">
          <h2 className="text-2xl font-bold">Task Management</h2>
          <button onClick={openModal} className="btn bg-sky-300 text-white">
            <FiPlusCircle />
            Create Task
          </button>
        </div>
        <div className="flex justify-between mt-5 gap-4">
          {stages.map((stage) => (
            <Stage
              key={stage}
              stage={stage}
              setRefetch={setRefetch}
              tasks={filteredTasks(stage)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle="Create Task">
        <CreateTaskForm setRefetch={setRefetch} onClose={closeModal} />
      </Modal>
    </DndProvider>
  );
};

export default Tasks;
