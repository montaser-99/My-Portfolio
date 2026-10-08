import "./App.css";
import { MotionConfig } from "framer-motion";
import Lodingpage from "./pages/Lodingpage";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Lodingpage />
    </MotionConfig>
  );
}

export default App;
