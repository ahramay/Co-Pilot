import { Routes as BRRoutes, Route } from "react-router-dom";
import Home from "../components/pages/home/home";
import ChatHead from "../components/pages/chatHead";

const router: React.FC = () => {
  return (
    <BRRoutes>
      <Route path="/chat" element={<Home />} />
      <Route path="/" element={<ChatHead />} />
    </BRRoutes>
  );
};
export default router;
