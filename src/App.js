import { useEffect } from "react";
import "./App.css";
import Leads from "./components/Leads";
import { useDispatch } from "react-redux";
import { showSidebar } from "./redux/slice/sidebar";
import { detectDeviceType } from "./utils/commonFunctions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let isMobile = detectDeviceType();
    if (isMobile) {
      dispatch(showSidebar(false));
    }
  }, []);
  return <Leads />;
}

export default App;
