import TaskCard from "./TaskCard";

const Stage = ({ stage, tasks }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold">{stage}</h2>
      <div className="grid grid-cols-1 gap-y-4 mt-2">
        {tasks?.length > 0 &&
          tasks.map((task) => <TaskCard key={task._id} task={task} />)}
      </div>
    </div>
  );
};

export default Stage;
