import { createContext, useEffect, useState } from "react";

const Context = createContext();

export const ApartmanProvider = ({ children }) => {
  const [apartman, setApartman] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    fetch("https://api.adriatic.hr/test/accommodation")
      .then((res) => res.json())
      .then((data) => {
        setApartman(data);
        setExpandedArray(new Array(data.length).fill(false));
        setFilteredApartments(data);
        setCapacity(data.capacity ? data.capacity : "");
      });
  }, []);

  const toggleExpand = (index) => {
    setExpandedArray((prevState) => {
      const newArray = [...prevState];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchApartments();
  };

  const searchApartments = () => {
    const isDateRangeWithinInterval = (
      startDate,
      endDate,
      intervalStart,
      intervalEnd
    ) => {
      const selectedStartDate = new Date(startDate);
      const selectedEndDate = new Date(endDate);
      const intervalStartDate = new Date(intervalStart);
      const intervalEndDate = new Date(intervalEnd);

      return (
        selectedStartDate >= intervalStartDate &&
        selectedEndDate <= intervalEndDate
      );
    };

    const filteredByDateAndCapacity = apartman.filter((apartment) => {
      const dateFilter = apartment.availableDates.some((interval) => {
        const intervalStart = new Date(interval.intervalStart);
        const intervalEnd = new Date(interval.intervalEnd);
        const selectedStartDate = new Date(startDate);
        const selectedEndDate = new Date(endDate);

        const isWithinInterval = isDateRangeWithinInterval(
          selectedStartDate,
          selectedEndDate,
          intervalStart,
          intervalEnd
        );

        return isWithinInterval;
      });

      const capacityFilter =
        !capacity || apartment.capacity >= parseInt(capacity);

      return dateFilter && capacityFilter;
    });

    setFilteredApartments(filteredByDateAndCapacity);
  };

  return (
    <Context.Provider
      value={{
        apartman,
        setApartman,
        expandedArray,
        toggleExpand,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        searchApartments,
        capacity,
        setCapacity,
        filteredApartments,
        handleSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
