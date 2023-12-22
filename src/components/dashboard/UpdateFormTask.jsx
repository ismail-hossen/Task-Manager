import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateTaskForm = ({ onClose, setRefetch, updateTask }) => {
  const { title, description, _id, priority, deadline } = updateTask || {};
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const addedTask = await axios.patch(
        `http://localhost:4000/update-task/${_id}`,
        data
      );
      if (addedTask?.data?.acknowledged) {
        toast.success("Successfully updated task!");
        onClose();
        setRefetch(true);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                {...register("title")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                name="title"
                id="title"
                type="text"
                defaultValue={title}
                required
                placeholder="Title"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="deadline" className="block text-gray-600">
                Deadline
              </label>
              <input
                {...register("deadline")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                name="deadline"
                id="deadline"
                required
                defaultValue={deadline}
                type="datetime-local"
                placeholder="Deadline"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered textarea-xs max-w-xs w-full px-4 py-3 text-gray-800 border rounded-md"
                name="description"
                id="description"
                type="textarea"
                defaultValue={description}
                required
                placeholder="Description"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="priority" className="block text-gray-600">
                Select Priority
              </label>
              <select
                {...register("priority")}
                name="priority"
                id="priority"
                defaultValue={priority}
                className="select select-bordered w-full max-w-xs"
              >
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="modal-backdrop w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
