import { useContext } from "react";
import Context from "../context/Context";

const Filters = () => {
  const {
    setStartDate,
    setEndDate,
    setCapacity,
    startDate,
    endDate,
    capacity,
    handleSubmit,
  } = useContext(Context);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Start date:</label>
          <input
            type="date"
            id="start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label>End date: </label>
          <input
            type="date"
            id="end"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Broj osoba: </label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter capacity"
          />
        </div>
        <button type="submit" className="btn">
          Pretraži
        </button>
      </form>
    </div>
  );
};

export default Filters;
