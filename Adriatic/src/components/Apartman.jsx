import { useContext } from "react";
import Context from "../context/Context";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Apartman = ({ index }) => {
  const { filteredApartments, expandedArray, toggleExpand } =
    useContext(Context);
  const {
    image,
    title,
    beachDistanceInMeters: beach,
    capacity,
    amenities,
  } = filteredApartments[index];

  const isExpanded = expandedArray && expandedArray[index];

  return (
    <div className="kartica-apartman">
      <div className="apartman-slika">
        <img src={image} alt="apartman" />
      </div>
      <div className="apartman-opis">
        <p>"{title}"</p>
        <p>Maksimalan broj ljudi: {capacity}</p>
        {beach ? <p>Distanca do plaže: {beach}</p> : null}
        {isExpanded && (
          <ul className="amenities ">
            <li>Klima: {amenities.airConditioning ? "Da" : "Ne"}</li>
            <li>Parking: {amenities.parkingSpace ? "Da" : "Ne"}</li>
            <li>Ljubimci: {amenities.pets ? "Da" : "Ne"}</li>
            <li>Bazen: {amenities.pool ? "Da" : "Ne"}</li>
            <li>Wi-Fi: {amenities.wifi ? "Da" : "Ne"}</li>
            <li>TV: {amenities.tv ? "Da" : "Ne"}</li>
          </ul>
        )}
        <div className="arrow" onClick={() => toggleExpand(index)}>
          {isExpanded ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartman;
