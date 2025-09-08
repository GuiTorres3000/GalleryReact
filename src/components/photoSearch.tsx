import InputText from "./inputText";
import SearchIcon from "../assets/icons/search.svg?react";

export default function PhotoSearch() {
  return (
      <InputText icon={SearchIcon} placeholder="Buscar fotos" className="flex-1"/>
  )
}
