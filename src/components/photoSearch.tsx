import InputText from "./inputText";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";

export default function PhotoSearch() {

  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(
    debounce((value: string) => console.log("Valor com debounce", value), 300), []
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
      <InputText icon={SearchIcon} placeholder="Buscar fotos" className="flex-1"
      value={inputValue} onChange={handleInputChange}/>
  )
}
