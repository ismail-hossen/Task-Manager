import TaskCard from "./TaskCard";

const Stage = ({ stage }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold">{stage}</h2>
      <div className="grid grid-cols-1 gap-y-4 mt-2">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Stage;
