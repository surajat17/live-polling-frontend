import "./App.css";
import { useSelector } from "react-redux";
import Student from "./views/Student";
import Teacher from "./views/Teacher";
import Selection from "./views/Selection";
import ChatButton from "./components/Chat/ChatButton";

function App() {
  const role = useSelector((state) => state.role);

  return (
    <div className="App">
      {role.type === "student" ? (
        <Student />
      ) : role.type === "teacher" ? (
        <Teacher />
      ) : (
        <Selection />
      )}
      {role.type && <ChatButton style={{ position: "relative", top: 50, right: 0 }} />}
    </div>
  );
}

export default App;
