import { Outlet } from "react-router";
import InputText from "../components/inputText";
import SearchIcon from "../assets/icons/search.svg?react";

export default function GeneralLayout() {
      return (
            <div>
                  <InputText icon={SearchIcon} placeholder="Buscar Foto" />
                  <Outlet />
            </div>           
      )
}
