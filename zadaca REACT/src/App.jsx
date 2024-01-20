import data from "./data/data.json";

const App = () => {
  return (
    <>
      <div>
        {data.map((val, index) => {
          return (
            <p key={index}>
              {index} {val.ime} {val.prezime}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default App;
