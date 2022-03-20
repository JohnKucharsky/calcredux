import Calc from "./Calc";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { AiFillGithub } from "react-icons/ai";
import { LinearProgress } from "@mui/material";

function App() {
  const response = useSelector((state) => state.modal.response);
  const idle = useSelector((state) => state.modal.idle);
  console.log(idle);
  return (
    <div>
      <div className="absolute-res">
        {idle && <LinearProgress></LinearProgress>}
        <h1>{response.name}</h1>
        <h1>{response.secondName}</h1>
        <a
          className="gitIcon"
          href="https://github.com/JohnKucharsky/calcredux"
        >
          <AiFillGithub />
          Visit GitHub
        </a>
      </div>
      <Calc />
      <Modal />
    </div>
  );
}

export default App;
