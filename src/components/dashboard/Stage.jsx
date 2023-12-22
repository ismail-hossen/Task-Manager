import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const Stage = ({ stage, tasks, setRefetch }) => {
  const axiosPublic = useAxios();
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => moveItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveItem = (item) => {
    axiosPublic
      .patch(`/update-task/${item?._id}`, {
        stage: stage.toLowerCase(),
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          toast.success("Moved!");
          setRefetch(true);
        }
      });
  };

  return (
    <div ref={drop} className="w-full">
      <h2 className="text-xl font-semibold">{stage}</h2>
      <div className="grid grid-cols-1 gap-y-4 mt-2">
        {tasks?.length > 0 &&
          tasks.map((task) => (
            <TaskCard key={task._id} setRefetch={setRefetch} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Stage;
