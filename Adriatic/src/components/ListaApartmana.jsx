import { useContext } from "react";
import Context from "../context/Context";
import Apartman from "./Apartman";

const ListaApartmana = () => {
  const { filteredApartments } = useContext(Context);
  return (
    <div className="lista-apartmana">
      {filteredApartments.map((_, index) => (
        <Apartman key={index} index={index} />
      ))}
    </div>
  );
};

export default ListaApartmana;
