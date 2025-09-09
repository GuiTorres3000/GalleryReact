import { Outlet } from "react-router";
import MainHeader from "../components/layout/mainHeader";
import MainContent from "../components/layout/mainContent";

export default function GeneralLayout() {
      return (
            <div>
                  <MainHeader className="mt-9"/>
                  <MainContent />
                  <Outlet />

            </div>           
      )
}
