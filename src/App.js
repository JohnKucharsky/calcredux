import Calc from "./Calc";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { AiFillGithub } from "react-icons/ai";

function App() {
  const response = useSelector((state) => state.modal.response);

  return (
    <div>
      <div className="absolute-res">
        <h1>{response.name}</h1>
        <h1>{response.secondName}</h1>
        <a
          className="gitIcon"
          href="https://github.com/JohnKucharsky?tab=repositories"
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
