import axios from "axios";
import { useState } from "react";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "../Modal";
import UpdateTaskForm from "./UpdateFormTask";

const TaskCard = ({ task, setRefetch }) => {
  const { title, description, _id } = task || {};
  const [showActionBtn, setShowActionBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handledDelete = (id) => {
    axios.delete(`http://localhost:4000/delete-task/${id}`).then((res) => {
      if (res?.data?.deletedCount > 0) {
        setRefetch(true);
        toast.success("Delete Success!");
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      ref={drag}
      className={`card hover:cursor-move bg-base-200 shadow-sm rounded-md ${
        isDragging ? "opacity-100" : "opacity-100"
      }`}
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
              <button onClick={openModal} className="text-xl">
                <FaRegEdit />
              </button>
              <button onClick={() => handledDelete(_id)} className="text-xl">
                <RiDeleteBin2Line />
              </button>
            </div>
          )}
        </div>
        <p>
          {description.length > 80 ? description.slice(0, 80) : description}
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle="Update Task">
        <UpdateTaskForm
          setRefetch={setRefetch}
          onClose={closeModal}
          updateTask={task}
        />
      </Modal>
    </div>
  );
};

export default TaskCard;
