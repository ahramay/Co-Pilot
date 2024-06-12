import { Routes as BRRoutes, Route } from "react-router-dom";
import Home from "../components/pages/home/home";

const router: React.FC = () => {
  return (
    <BRRoutes>
      <Route path="/" element={<Home />} />
    </BRRoutes>
  );
};
export default router;
