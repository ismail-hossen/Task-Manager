import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-server-six-delta.vercel.app",
  // baseURL: "http://localhost:4000",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
