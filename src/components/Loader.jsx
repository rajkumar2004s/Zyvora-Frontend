import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className="text-2xl text-slate-600 animate-spin" />
    </div>
  );
}

export default Loader;