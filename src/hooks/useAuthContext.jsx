import { useContext } from "react";
import { ThemeContext } from "../authContext/AuthContext";

const useAuthContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default useAuthContext;
