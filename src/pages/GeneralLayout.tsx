import { Outlet } from "react-router";
import MainHeader from "../components/layout/mainHeader";

export default function GeneralLayout() {
      return (
            <div>
                  <MainHeader className="mt-9"/>
                  <Outlet />
            </div>           
      )
}
